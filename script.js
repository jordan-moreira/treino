const STORAGE_KEY = "treino-dinamico-state";

const NOME_FASES = {
	base: "Base",
	temporada: "Temporada",
};

const rotulosVariaveis = {
	levePadrao: "Leve padrao",
	longaoBase: "Longao base",
	aceleracao100: "Aceleracao 100m",
	interval800: "Intervalo 800m",
	interval1000: "Intervalo 1000m",
	limiarBase: "Limiar base",
	limiarConservador: "Limiar conservador",
	limiarModerado: "Limiar moderado",
	limiarDescarga: "Limiar descarga",
	limiarExato: "Limiar exato",
	rep400Forte: "Repetition 400m forte",
	rep400Padrao: "Repetition 400m padrao",
	int200Extensivo: "Intervalo 200m extensivo",
	int200Velocidade: "Intervalo 200m velocidade",
	marathonLongao: "Longao marathon",
	interval400Prova: "Intervalo 400m prova",
};

const estadoPadrao = {
	distancia: 3000,
	tempo: "10:02",

	dataBaseSemana1: formatoDataInput(new Date()),
	dataConsulta: formatoDataInput(new Date()),

	dataInicioTemporada: null,

	fase: "base",
	semana: "A",
	semanaVisualizada: null,
};

let elementos = {
	distancia: null,
	tempo: null,
	dataBaseSemana1: null,
	dataConsulta: null,
	fase: null,
	semanaAtual: null,
	semanaAtualBtn: null,
	gradeSemanas: null,
	visualizacaoPlano: null,
	resumoMetricas: null,
	metricasContainer: null,
	toggleMetricas: null,
	navegacaoContainer: null,
	toggleNavegacao: null,
	statusSemana: null,
	descricaoFase: null,
	metricasBasicas: null,
};
let estado = carregarEstado();

window.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
	if (!globalThis.plano) {
		throw new Error("Plano nao encontrado em template.js");
	}
	for (const id of Object.keys(elementos)) {
		elementos[id] = document.getElementById(id);
	}

	aplicarAjustesIniciais();
	preencherCampos();
	registrarEventos();
	renderizar();
}

function carregarEstado() {
	const salvo = localStorage.getItem(STORAGE_KEY);

	if (!salvo) return { ...estadoPadrao };

	try {
		const carregado = { ...estadoPadrao, ...JSON.parse(salvo) };

		carregado.semana = carregado.semana;

		return carregado;
	} catch {
		return { ...estadoPadrao };
	}
}

function salvarEstado() {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function preencherCampos() {
	for (const id of Object.keys(estado)) {
		const elemento = elementos[id];

		if (!elemento) continue;

		if (id === "dataBaseSemana1" || id === "dataConsulta") {
			elemento.value = estado[id] || formatoDataInput(hoje());
		} else {
			elemento.value = estado[id] ?? "";
		}
	}
}

function registrarEventos() {
	for (const campo of ["distancia", "tempo", "dataBaseSemana1", "dataConsulta"]) {
		elementos[campo].addEventListener("input", () => {
			estado[campo] = elementos[campo].value;
			salvarEstado();
			// Sincronizar semana se mudou a data
			if (campo === "dataConsulta" || campo === "dataBaseSemana1") {
				sincronizarPlanoComCalculado();
			}
			renderizar();
		});
	}

	elementos.fase.addEventListener("change", () => {
		const faseAnterior = estado.fase;

		estado.fase = elementos.fase.value;

		if (faseAnterior !== "temporada" && estado.fase === "temporada") {
			const confirma = confirm("Deseja reiniciar a temporada a partir desta data?");
			if (confirma) {
				estado.dataInicioTemporada = estado.dataConsulta;
				estado.semana = "P1";
			}
			estado.semanaVisualizada = "P1";
		}

		if (faseAnterior === "temporada" && estado.fase === "base") {
			estado.dataBaseSemana1 = estado.dataConsulta;
			estado.semana = "A";
			estado.semanaVisualizada = "A";
		}

		sincronizarPlanoComCalculado(true);
	});

	elementos.semanaAtualBtn.addEventListener("click", irParaSemanaAtual);
	elementos.toggleMetricas.addEventListener("click", () => ajustarEstadoSecao("metricas"));
	elementos.toggleNavegacao.addEventListener("click", () => ajustarEstadoSecao("navegacao"));
}

function sincronizarPlanoComCalculado(modoLeitor = false) {
	const dataConsulta = parseData(estado.dataConsulta);
	if (!dataConsulta) return;

	const indiceCiclo = (data, ciclo) =>
		((Math.floor(diasEntre(data, dataConsulta) / 7) % ciclo.length) + ciclo.length) %
		ciclo.length;

	const config =
		estado.fase === "temporada"
			? {
					data: parseData(estado.dataInicioTemporada),
					ciclo: ["P1", "P2", "P3"],
					reiniciar() {
						Object.assign(estado, {
							dataBaseSemana1: estado.dataConsulta,
							dataInicioTemporada: null,
							fase: "base",
						});
					},
				}
			: {
					data: parseData(estado.dataBaseSemana1),
					ciclo: ["A", "B", "C", "D"],
					reiniciar() {
						estado.dataBaseSemana1 = estado.dataConsulta;
					},
				};

	if (!config.data) return;

	const indice = indiceCiclo(config.data, config.ciclo);

	if (!indice && !modoLeitor) {
		config.reiniciar();
		estado.semana = estado.semanaVisualizada = "A";
		preencherCampos();
	} else {
		modoLeitor
			? (estado.semanaVisualizada = config.ciclo[indice])
			: (estado.semana = estado.semanaVisualizada = config.ciclo[indice]);
	}
	salvarEstado();
	renderizar();
	return;
}

function irParaSemanaAtual() {
	const hojeFormatado = formatoDataInput(hoje());
	estado.dataConsulta = hojeFormatado;
	estado.semanaVisualizada = estado.semana;
	elementos.dataConsulta.value = hojeFormatado;
	salvarEstado();
	renderizar();
}

function renderizarMetricas(metadados) {
	if (!metadados) {
		elementos.metricasBasicas.innerHTML = `
			<div class="card vazio">
				<p>Informe a distancia e o tempo do teste para calcular as metricas.</p>
			</div>
		`;
		elementos.resumoMetricas.innerHTML = "";
		return;
	}

	const { calculados, variaveis } = metadados;
	const metricas = [
		["VDOT", calculados.vdot.toFixed(1)],
		["Easy medio", formatarTempo(calculados.easyMedio)],
		["Marathon", formatarTempo(calculados.marathon)],
		["Threshold 1km", formatarTempo(calculados.threshold1000m)],
		["Interval 1km", formatarTempo(calculados.interval1000m)],
		["Interval 800m", formatarTempo(calculados.interval800m)],
		["Interval 400m", formatarTempo(calculados.interval400m)],
		["Interval 200m", formatarTempo(calculados.interval200m)],
		["Repetition 400m", formatarTempo(calculados.repetition400m)],
		["Fast reps 200m", formatarTempo(calculados.fastReps)],
	];

	elementos.metricasBasicas.innerHTML = metricas
		.map(
			([nome, valor]) => `
				<div class="metric-card">
					<span>${nome}</span>
					<strong>${valor}</strong>
				</div>
			`,
		)
		.join("");

	elementos.resumoMetricas.innerHTML = Object.entries(variaveis)
		.map(
			([chave, valor]) => `
				<div class="ritmo-card">
					<span>${rotulosVariaveis[chave] || chave}</span>
					<strong>${formatarValorRitmo(valor)}</strong>
				</div>
			`,
		)
		.join("");
}

function ajustarEstadoSecao(nome) {
	estado[`${nome}Colapsada`] = !estado[`${nome}Colapsada`];

	const colapsada = estado[`${nome}Colapsada`];
	const container = elementos[`${nome}Container`];
	const toggle = elementos[`toggle${nome[0].toUpperCase()}${nome.slice(1)}`];
	const texto = `${colapsada ? "Mostrar" : "Ocultar"} ${nome}`;

	container.classList.toggle("is-collapsed", colapsada);
	toggle.classList.toggle("is-collapsed", colapsada);

	toggle.setAttribute("aria-expanded", String(!colapsada));
	toggle.setAttribute("aria-label", texto);
	toggle.querySelector(".sr-only").textContent = texto;
	salvarEstado();
}

function renderizarCabecalho(semanaCalculada) {
	const faseNome = NOME_FASES[estado.fase];
	const labelSemana = `Semana ${estado.semana}`;
	const calculada = semanaCalculada
		? `Semana atual calculada: ${semanaCalculada.semana}`
		: "Semana atual calculada: --";

	elementos.descricaoFase.textContent = `${faseNome} - ${labelSemana}`;
	elementos.semanaAtual.textContent = calculada;
}

function renderizarNavegacaoSemanas() {
	const semanas = getSemanasFase(estado.fase);

	elementos.gradeSemanas.innerHTML = semanas
		.map(
			(semana) => `
				<button class="week-chip ${semana.identificador === estado.semanaVisualizada ? "active" : ""}" data-week="${semana.identificador}">
					${semana.titulo}
				</button>
			`,
		)
		.join("");

	elementos.gradeSemanas.querySelectorAll("[data-week]").forEach((botao) => {
		botao.addEventListener("click", () => {
			estado.semanaVisualizada = botao.getAttribute("data-week");
			salvarEstado();
			renderizar();
		});
	});
}

function renderizarPlano(metricas) {
	const semanas = getSemanasFase(estado.fase);

	const semanaExibida = estado.semanaVisualizada ?? estado.semana;

	const semanaSelecionada = semanas.find(
		(semana) => String(semana.identificador) === String(semanaExibida),
	);

	if (!semanaSelecionada) {
		elementos.visualizacaoPlano.innerHTML = `
			<div class="card vazio">
				Semana nao encontrada.
			</div>
		`;
		return;
	}

	const dias = Object.entries(semanaSelecionada.dados).filter(
		([chave]) => chave !== "identificador",
	);

	elementos.visualizacaoPlano.innerHTML = dias
		.map(([nomeDia, dadosDia]) => renderizarDia(nomeDia, dadosDia, metricas))
		.join("");
}

function renderizarDia(nomeDia, dia, metricas) {
	// Caso especial: dia com opções alternativas
	if (Array.isArray(dia.alternativas)) {
		return renderizarDiaComAlternativas(nomeDia, dia, metricas);
	}

	const sessoes = Object.entries(dia).filter(([_, sessao]) => sessao);

	const htmlSessoes = sessoes
		.map(([nomeSessao, sessao]) => renderizarSessao(nomeSessao, sessao, metricas))
		.join("");

	return `
		<section class="dia-card">
			<h3>${formatarNomeDia(nomeDia)}</h3>

			${htmlSessoes}
		</section>
	`;
}

function renderizarDiaComAlternativas(nomeDia, dia, metricas) {
	const htmlAlternativas = dia.alternativas
		.map((alternativa) => {
			const htmlSessoes = Object.entries(alternativa)
				.filter(([chave, valor]) => chave !== "nome" && valor)
				.map(([nomeSessao, sessao]) => renderizarSessao(nomeSessao, sessao, metricas))
				.join("");

			return `
				<div class="opcao-treino">
					<h4>${alternativa.nome}</h4>

					${htmlSessoes}
				</div>
			`;
		})
		.join("");

	return `
		<section class="dia-card">
			<h3>${formatarNomeDia(nomeDia)}</h3>

			${htmlAlternativas}
		</section>
	`;
}

function formatarNomeDia(nomeDia) {
	const nomes = {
		segunda: "Segunda-feira",
		terca: "Terça-feira",
		quarta: "Quarta-feira",
		quinta: "Quinta-feira",
		sexta: "Sexta-feira",
		sabado: "Sábado",
		domingo: "Domingo",
	};

	return nomes[nomeDia] || nomeDia;
}

function renderizarSessao(nomeSessao, sessao, metricas) {
	if (!sessao?.blocos?.length) {
		return "";
	}

	const htmlBlocos = sessao.blocos.map((bloco) => renderizarBloco(bloco, metricas)).join("");

	return `
		<div class="sessao-card">
			<h4>${formatarNomeSessao(nomeSessao)}</h4>

			${htmlBlocos}
		</div>
	`;
}

function renderizarBloco(bloco, metricas) {
	const descricao = gerarDescricaoBloco(bloco);

	const ritmoHtml = renderizarRitmoBloco(bloco, metricas);

	const descansoHtml = bloco.descansoEmMin
		? `<div class="bloco-info">
				<strong>Descanso:</strong>
				${formatarDescanso(bloco.descansoEmMin)}
		   </div>`
		: "";

	const obsHtml = bloco.obs
		? `<div class="bloco-info">
				<strong>Obs:</strong>
				${bloco.obs}
		   </div>`
		: "";

	return `
		<div class="bloco-card">
			<div class="bloco-titulo">
				${bloco.tipo}
			</div>

			<div class="bloco-descricao">
				${descricao}
			</div>

			${ritmoHtml}

			${descansoHtml}

			${obsHtml}
		</div>
	`;
}

function renderizarRitmoBloco(bloco, metricas) {
	if (!metricas) {
		return "";
	}

	const chave = bloco.ritmo;

	if (!chave) {
		return "";
	}

	const ritmo = metricas.variaveis[chave];

	if (!ritmo) {
		return "";
	}

	return `
		<div class="bloco-info">
			<strong>Ritmo:</strong>
			${formatarValorRitmo(ritmo)}
		</div>
	`;
}

function renderizar() {
	const dataBaseSemana1 = parseData(elementos.dataBaseSemana1.value);
	const dataConsulta = parseData(elementos.dataConsulta.value);
	const semanaCalculada = calcularSemanaBase(dataBaseSemana1, dataConsulta);

	const semanas = getSemanasFase(estado.fase);

	if (!semanas.some((semana) => semana.identificador === estado.semana)) {
		estado.semana = semanas[0].identificador;
		salvarEstado();
	}
	const metricas = calcularMetricas();
	renderizarCabecalho(semanaCalculada);
	renderizarPlano(metricas);
	renderizarMetricas(metricas);
	renderizarNavegacaoSemanas();
}
