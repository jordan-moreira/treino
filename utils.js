function minParaSegundos(tempo) {
	const [min, seg] = tempo.split(":").map(Number);

	return min * 60 + seg;
}

function aplicarAjustesIniciais() {
	if (!estado.semana) {
		estado.semana = pegarSemanaInicial(estado.fase);
		estado.semanaVisualizada = estado.semana;
		salvarEstado();
	}
}

function hoje() {
	return new Date();
}

function formatoDataInput(data) {
	return data.toISOString().slice(0, 10);
}

function parseData(value) {
	if (!value) return null;

	const data = new Date(`${value}T00:00:00`);

	return Number.isNaN(data.getTime()) ? null : data;
}

function diasEntre(inicio, fim) {
	const inicioUtc = Date.UTC(inicio.getFullYear(), inicio.getMonth(), inicio.getDate());
	const fimUtc = Date.UTC(fim.getFullYear(), fim.getMonth(), fim.getDate());
	const msPorDia = 24 * 60 * 60 * 1000;

	return Math.floor((fimUtc - inicioUtc) / msPorDia);
}

function calcularSemanaBase(dataBaseSemana1, dataConsulta) {
	if (!dataBaseSemana1 || !dataConsulta) return null;

	const diffDias = diasEntre(dataBaseSemana1, dataConsulta);
	const semana = Math.floor(diffDias / 7) + 1;

	return { diffDias, semana };
}

function formatarFaixa(faixa) {
	if (!faixa || typeof faixa.min !== "number" || typeof faixa.max !== "number") return "-";

	return `${formatarTempo(faixa.min)} - ${formatarTempo(faixa.max)}`;
}

function formatarNumero(valor) {
	return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(valor);
}

function formatarDuracaoMinutos(valor) {
	return `${formatarNumero(valor)} min`;
}

function getPlano() {
	return globalThis.plano;
}

function getSemanasFase(fase) {
	const faseSelecionada = getPlano()[fase === "base" || fase === "temporada" ? fase : "base"];

	return Object.values(faseSelecionada).map((semana) => ({
		identificador: semana.identificador,
		titulo: `Semana ${semana.identificador}`,
		dados: semana,
	}));
}

function pegarSemanaInicial(fase) {
	if (fase === "base") return "A";
	if (fase === "temporada") return "P1";
	return 1;
}

function calcularMetricas() {
	const distancia = Number(elementos.distancia.value);
	const tempo = minParaSegundos(elementos.tempo.value) / 60;

	if (!distancia || !tempo) return null;

	const calculados = calcularRitmos(distancia, tempo);
	const variaveis = calcularVariaveisTreino(calculados);

	return { calculados, variaveis };
}

function formatarTempo(minutos) {
	if (typeof minutos !== "number" || Number.isNaN(minutos)) return "--:--";

	const totalSegundos = Math.round(minutos * 60);
	const mins = Math.floor(totalSegundos / 60);
	const segs = totalSegundos % 60;

	return `${mins}:${String(segs).padStart(2, "0")}`;
}

function formatarValorRitmo(valor) {
	if (!valor) return "-";

	const ritmoMedio = (valor.min + valor.max) / 2;

	return `${formatarTempo(valor.min)} < ${formatarTempo(ritmoMedio)} > ${formatarTempo(valor.max)}`;
}

function formatarTempoTreino(valor) {
	if (Array.isArray(valor)) {
		if (valor.length < 2) return "-";

		return `${formatarDuracaoMinutos(valor[0])} - ${formatarDuracaoMinutos(valor[1])}`;
	}

	if (valor === null || valor === undefined) return "-";

	return formatarDuracaoMinutos(valor);
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

function formatarNomeSessao(nomeSessao) {
	const nomes = {
		sessao1: "Sessão 1",
		sessao2: "Sessão 2",
		sessao3: "Sessão 3",
	};

	return nomes[nomeSessao] || nomeSessao;
}

function gerarDescricaoBloco(bloco) {
	if (bloco.repeticoes) {
		if (bloco.distanciaEmMetros) {
			return `${bloco.repeticoes}x${formatarDistancia(bloco.distanciaEmMetros)}`;
		}

		if (bloco.tempoEmMin) {
			return `${bloco.repeticoes}x${bloco.tempoEmMin} min`;
		}
	}

	if (bloco.tempoEmMin) {
		return formatarTempoTreino(bloco.tempoEmMin);
	}

	if (bloco.distanciaEmMetros) {
		const distancia = bloco.distanciaEmMetros;

		if (Array.isArray(distancia)) {
			return `${formatarDistancia(distancia[0])} - ${formatarDistancia(distancia[1])}`;
		}

		return formatarDistancia(distancia);
	}

	return "-";
}

function formatarDistancia(valor) {
	if (valor >= 1000) {
		return `${valor / 1000}km`;
	}

	return `${valor}m`;
}

function formatarDescanso(valor) {
	if (Array.isArray(valor)) {
		return `${valor[0]}-${valor[1]} min`;
	}

	return `${valor} min`;
}
