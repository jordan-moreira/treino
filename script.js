import { gerarTextoTreino, pace, faixa, minParaSegundos } from "./utils.js";

const CAMPOS = ["easyMin", "easyMax", "marathon", "threshold", "interval", "repetition", "prova5k"],
	ELEMENTOS = {};
for (const campo of CAMPOS) {
	ELEMENTOS[campo] = document.getElementById(campo);
}

document.getElementById("btnCalcular").addEventListener("click", calcular);
window.addEventListener("DOMContentLoaded", carregarDados);

function salvarDados() {
	const dados = {};

	for (const campo of CAMPOS) {
		dados[campo] = ELEMENTOS[campo].value;
	}

	localStorage.setItem("dadosCalculadora", JSON.stringify(dados));
}

function carregarDados() {
	const dadosSalvos = localStorage.getItem("dadosCalculadora");

	if (!dadosSalvos) return;

	const dados = JSON.parse(dadosSalvos);

	for (const [campo, valor] of Object.entries(dados)) {
		const input = ELEMENTOS[campo];

		if (input) {
			input.value = valor;
		}
	}
	calcular();
}

function criarTabela(nomeTabela, obj) {
	const tabela = document.createElement("table");

	const thead = document.createElement("thead");
	const titulo = document.createElement("caption");

	titulo.textContent = nomeTabela;

	thead.innerHTML = `
        <tr>
            <th>Métrica</th>
            <th>Segundos</th>
            <th>Pace</th>
        </tr>
    `;
	tabela.appendChild(titulo);
	tabela.appendChild(thead);

	const tbody = document.createElement("tbody");

	for (const [nome, valor] of Object.entries(obj)) {
		const tr = document.createElement("tr");

		const tdNome = document.createElement("td");
		tdNome.textContent = nome;

		const tdValor = document.createElement("td");
		tdValor.textContent =
			typeof valor == "number"
				? valor.toFixed(1)
				: `${valor.min.toFixed(1)}–${valor.max.toFixed(1)}`;
		const tdPace = document.createElement("td");

		tdPace.textContent = typeof valor == "number" ? pace(valor) : faixa(valor.min, valor.max);

		tr.appendChild(tdNome);
		tr.appendChild(tdValor);
		tr.appendChild(tdPace);

		tbody.appendChild(tr);
	}

	tabela.appendChild(tbody);

	return tabela;
}

function calcular() {
	const dados = {};

	for (const campo of CAMPOS) {
		dados[campo] = minParaSegundos(ELEMENTOS[campo].value);
	}

	const { easyMin, easyMax, marathon, threshold, interval, repetition, prova5k } = dados;

	const easyMedio = (easyMin + easyMax) / 2;

	const calculaFaixa = (base, min, max) => ({
		min: base * min,
		max: base * max,
	});
	const calculados = {
		leve: calculaFaixa(easyMedio, 0.97, 1.01),
		limiar: calculaFaixa(repetition, 0.98, 1),
		longo: calculaFaixa(marathon, 0.96, 1),
		ritmoProva: calculaFaixa(prova5k, 0.977, 1),
	};
	const metricas = {
		calculados,

		base: {
			seg: calculados.leve,

			terS1_4: calculaFaixa(interval, 0.945, 0.969),
			terS5_7: calculaFaixa(repetition, 1, 1.015),
			terS8_10: calculados.limiar,

			qua: calculados.leve,

			quiS1_4: calculaFaixa(threshold, 1.017, 1.038),
			quiS5_10: calculados.limiar,

			sex: calculados.leve,
		},

		temporada: {
			seg: calculados.leve,

			ter: calculaFaixa(interval, 0.876, repetition / interval),

			qua: calculados.leve,

			quiA: calculaFaixa(threshold, 0.953, 0.996),
			quiB: calculaFaixa(threshold, 0.966, 0.983),
			quiC: calculados.ritmoProva,

			sex: calculados.leve,
		},

		preCompetitiva: {
			seg: calculados.leve,

			ter: calculados.ritmoProva,

			qua: calculados.leve,

			qui: threshold * 0.975,

			sex: calculados.leve,
		},
	};

	const tabelas = {
		Base: metricas.base,

		Temporada: metricas.temporada,

		PreCompetitiva: metricas.preCompetitiva,
	};

	const r = document.getElementById("resultado");

	r.innerHTML = "";

	for (const [nomePagina, dadosPagina] of Object.entries(tabelas)) {
		const tabela = criarTabela(nomePagina, dadosPagina);

		r.appendChild(tabela);
	}

	const textoGerado = gerarTextoTreino(metricas);

	document.getElementById("textoTreino").value = textoGerado;
	salvarDados();
}

function copiarTexto() {
	const texto = document.getElementById("textoTreino");

	texto.select();

	navigator.clipboard.writeText(texto.value);

	alert("Texto copiado.");
}

function baixarTxt() {
	const texto = document.getElementById("textoTreino").value;

	const blob = new Blob([texto], { type: "text/plain" });

	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");

	a.href = url;

	a.download = "treinamento.txt";

	a.click();

	URL.revokeObjectURL(url);
}
