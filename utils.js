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

export function faixa(min, max) {
	let media = (min + max) / 2;
	return `${pace(min)}<${pace(media)}>${pace(max)}`;
}

export function gerarTextoTreino(metricas) {
	return `
    BASE (Semanas 1–10)

    Segunda-feira – Corrida leve + acelerações

    40min a ${faixa(metricas.base.seg.min, metricas.base.seg.max)}
    6x100m acelerações


    Terça-feira – Intervalados VO₂máx

    Sem. 1–4: 5–6x800m a ${faixa(metricas.base.terS1_4.min, metricas.base.terS1_4.max)} | 2min trote
    Sem. 5–7: 6x1000m a ${faixa(metricas.base.terS5_7.min, metricas.base.terS5_7.max)} | 2–3min trote
    Sem. 8–10: 6–8x1000m a ${faixa(metricas.base.terS8_10.min, metricas.base.terS8_10.max)} | 2–3min trote


    Quarta-feira – Pliometria + Força

    20min a ${faixa(metricas.base.qua.min, metricas.base.qua.max)}


    Quinta-feira – TREINO DE LIMIAR

    Sem. 1–4:
        6km a ${faixa(metricas.base.quiS1_4.min, metricas.base.quiS1_4.max)}
        2x400m ritmo de prova | 2min trote

    Sem. 5–7:
        20min contínuos a ${faixa(metricas.base.quiS5_7.min, metricas.base.quiS5_7.max)}
        2x300m leves/rápidos | 2min trote

    Sem. 8–10:
        4x8min a ${pace(metricas.base.quiS8_10)} | 90s trote
        1x400m ritmo de prova


    Sexta-feira – Corrida leve + acelerações

    50min a ${faixa(metricas.preCompetitiva.sex, metricas.base.seg.max)}
    4x100m acelerações


    Sábado – Longão + ritmo de prova

    Sem. 1–4:
        7km a ${pace(metricas.PM)}
        3km a ${faixa(metricas.temporada.quiB.min, metricas.temporada.quiB.max)}

    Sem. 5–10:
        7km a ${pace(metricas.PM)}
        2km limiar (${faixa(metricas.temporada.qui_bMin, metricas.temporada.qui_bMax)})
        1km ritmo de prova (${faixa(metricas.temporada.quiCMin, metricas.temporada.quiCMax)})


    Domingo – Core e mobilidade

    ---

    TEMPORADA (Semanas 11–52)

    Segunda-feira – Corrida leve + acelerações

    8–10km a ${faixa(metricas.preCompetitiva.seg, metricas.base.seg.max)}
    6–8x100m acelerações


    Terça-feira – Intervalados de VO₂máx / velocidade

    6–8x800–1000m a ${faixa(metricas.temporada.ter.min, metricas.temporada.ter.max)}
    90–180s trote


    Quarta-feira – Pliometria + Força


    Quinta-feira – Limiar (ajuste principal da Temporada)

    Sem.A:
        6km a ${faixa(metricas.temporada.quiA.min, metricas.temporada.quiA.max)}
        2x400m ritmo de prova

    Sem.B:
        5x7min a ${faixa(metricas.temporada.quiB.min, metricas.temporada.quiB.max)} | 70s trote
        1x400m forte (técnico, não exaustivo)

    Sem.C:
        4km a ${faixa(metricas.temporada.quiC.min, metricas.temporada.quiC.max)}
        2x800m a ritmo de prova


    Sexta-feira – Corrida leve + acelerações

    6–8km a ${faixa(metricas.preCompetitiva.sex, metricas.base.seg.max)}
    4–6x100m acelerações


    Sábado – Longão + Ritmo de Prova

    Semana leve:
        6–8km a ${pace(metricas.PM)}
        1–2km de limiar (${faixa(metricas.temporada.quiB.min, metricas.temporada.quiB.max)})
        1–2km ritmo de prova

    Semanas pesada:
        8–10km a ${pace(metricas.PM)}
        2–3km ritmo de prova


    Domingo – Core / Mobilidade / Recuperação leve

    ---

    Teste/Corrida a cada 5–6 semanas e recalcular paces no site

    ---

    Pré-Competitiva (antes de qualquer competição)

    Segunda-feira – Corrida leve + acelerações

    30min a ${pace(metricas.preCompetitiva.seg)}
    4–5x100m acelerações


    Terça-feira – Intervalados curtos

    4x800m a ritmo de prova (${pace(metricas.P5)})
    2min trote entre séries


    Quarta-feira – Pliometria leve + core


    Quinta-feira – Corrida de ritmo + tiro curto

    5km a ${pace(metricas.preCompetitiva.qui)}
    1x400m ritmo de prova | 2min trote


    Sexta-feira – Corrida leve

    20min a ${pace(metricas.preCompetitiva.sex)}


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
