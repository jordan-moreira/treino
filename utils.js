export function minParaSegundos(tempo) {
	const [min, seg] = tempo.split(":").map(Number);

	return min * 60 + seg;
}

export function pace(segundos) {
	const min = Math.floor(segundos / 60);
	const seg = Math.round(segundos % 60)
		.toString()
		.padStart(2, "0");

	return `${min}:${seg}`;
}

function faixaObj(obj) {
	return faixa(obj.min, obj.max);
}

export function faixa(min, max) {
	let media = (min + max) / 2;
	return `${pace(min)} < ${pace(media)} > ${pace(max)}`;
}

export function gerarTextoTreino(metricas) {
	return `
    BASE (Semanas 1–10)

    Segunda-feira – Corrida leve + acelerações

    40min a ${faixaObj(metricas.base.seg)}
    6x100m acelerações


    Terça-feira – Intervalados VO₂máx

    Sem. 1–4: 5–6x800m a ${faixaObj(metricas.base.terS1_4)} | 2min trote
    Sem. 5–7: 6x1000m a ${faixaObj(metricas.base.terS5_7)} | 2–3min trote
    Sem. 8–10: 6–8x1000m a ${faixaObj(metricas.base.terS8_10)} | 2–3min trote


    Quarta-feira – Pliometria + Força

    20min a ${faixaObj(metricas.base.qua)}


    Quinta-feira – TREINO DE LIMIAR

    Sem. 1–4:
        6km a ${faixaObj(metricas.base.quiS1_4)}
        2x400m a ritmo de prova (${faixaObj(metricas.base.quiS5_10)}) | 2min trote

    Sem. 5–7:
        20min contínuos a ${faixaObj(metricas.base.quiS5_10)}
        2x300m leves/rápidos | 2min trote

    Sem. 8–10:
        4x8min a ${faixaObj(metricas.base.quiS5_10)}
        1x400m a ritmo de prova (${faixaObj(metricas.calculados.ritmoProva)})


    Sexta-feira – Corrida leve + acelerações

    50min a ${faixaObj(metricas.base.sex)}
    4x100m acelerações


    Sábado – Longão + ritmo de prova

    Sem. 1–4:
        7km a ${faixaObj(metricas.calculados.longo)}
        3km a ${faixaObj(metricas.base.quiS5_10)}

    Sem. 5–10:
        7km a ${faixaObj(metricas.calculados.longo)}
        2km limiar (${faixaObj(metricas.base.quiS5_10)})
        1km a ritmo de prova (${faixaObj(metricas.calculados.ritmoProva)})


    Domingo – Core e mobilidade

    ---

    TEMPORADA (Semanas 11–52)

    Segunda-feira – Corrida leve + acelerações

    8–10km a ${faixaObj(metricas.temporada.seg)}
    6–8x100m acelerações


    Terça-feira – Intervalados de VO₂máx / velocidade

    6–8x800–1000m a ${faixaObj(metricas.temporada.ter)}
    90–180s trote


    Quarta-feira – Pliometria + Força

    20min a ${faixaObj(metricas.temporada.qua)}
    

    Quinta-feira – Limiar (ajuste principal da Temporada)

    Sem.A:
        6km a ${faixaObj(metricas.temporada.quiA)}
        2x400m ritmo de prova

    Sem.B:
        5x7min a ${faixaObj(metricas.temporada.quiB)} | 70s trote
        1x400m forte (técnico, não exaustivo)

    Sem.C:
        4km a ${faixaObj(metricas.temporada.quiC)}
        2x800m a ritmo de prova


    Sexta-feira – Corrida leve + acelerações

    6–8km a ${faixaObj(metricas.temporada.sex)}
    4–6x100m acelerações


    Sábado – Longão + Ritmo de Prova

    Semana leve:
        6–8km a ${faixaObj(metricas.calculados.longo)}
        1–2km de limiar (${faixaObj(metricas.temporada.quiB)})
        1–2km a ritmo de prova (${faixaObj(metricas.calculados.ritmoProva)})

    Semanas pesada:
        8–10km a ${faixaObj(metricas.calculados.longo)}
        2–3km a ritmo de prova (${faixaObj(metricas.calculados.ritmoProva)})


    Domingo – Core / Mobilidade / Recuperação leve

    ---

    Teste/Corrida a cada 5–6 semanas e recalcular paces no site

    ---

    Pré-Competitiva (antes de qualquer competição)

    Segunda-feira – Corrida leve + acelerações

    30min a ${faixaObj(metricas.preCompetitiva.seg)}
    4–5x100m acelerações


    Terça-feira – Intervalados curtos

    4x800m a ritmo de prova (${faixaObj(metricas.calculados.ritmoProva)})
    2min trote entre séries


    Quarta-feira – Pliometria leve + core

    20min a ${faixaObj(metricas.preCompetitiva.qua)}


    Quinta-feira – Corrida de ritmo + tiro curto

    5km a ${pace(metricas.preCompetitiva.qui)}
    1x400m ritmo de prova | 2min trote


    Sexta-feira – Corrida leve

    20min a ${faixaObj(metricas.preCompetitiva.sex)}


    Sábado – Ajuste conforme dia da competição

    Se competição for no sábado: dia da prova

    Se competição for no domingo:
    corrida leve de 3–4km ou mobilidade


    Domingo – Ajuste conforme dia da competição

    Se competição foi no sábado:
    corrida leve de 3–4km ou mobilidade

    Se competição for no domingo:
    dia da prova
    `;
}
