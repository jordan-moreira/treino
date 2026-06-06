const Daniels = {
	SLOW_VDOT_LIMIT: 39,

	getVDOT(distanciaEmMetros, minutos) {
		const velocidade = this._getVDOTParametros(distanciaEmMetros, minutos);

		const vo2 = this._getVO2(velocidade);

		const percentMax =
			0.8 + 0.298956 * Math.exp(-0.193261 * minutos) + 0.189439 * Math.exp(-0.012778 * minutos);

		return vo2 / percentMax;
	},

	_getVDOTParametros(distanciaEmMetros, minutos) {
		if (distanciaEmMetros >= 1200) return distanciaEmMetros / minutos;

		if (distanciaEmMetros > 800) {
			const factor1 = 1600 / distanciaEmMetros;

			const factor2 = (1600 - distanciaEmMetros) / 800;

			const factor3 = factor1 + 0.1 * factor2;

			return 1600 / (minutos * factor3);
		}

		const factor1 = 800 / distanciaEmMetros;

		const factor2 = factor1 * 2.1;

		return 1600 / (minutos * factor2);
	},

	getMarathonPace(vdot, distanciaEmMetros) {
		return distanciaEmMetros / this._getVelocidadeMarathon(vdot);
	},

	getEasyPace(vdot, distanciaEmMetros, slower) {
		if (this._isSlowVdot(vdot)) vdot = this._getSRVDOT(vdot);

		return this._getCustomEffortPace(vdot, distanciaEmMetros, slower ? 0.62 : 0.7);
	},

	getThresholdPace(vdot, distanciaEmMetros) {
		if (this._isSlowVdot(vdot)) {
			const srvdot = this._getSRVDOT(vdot);

			vdot = (srvdot + vdot) / 2;
		}

		return this._getCustomEffortPace(vdot, distanciaEmMetros, 0.88);
	},

	getIntervalPace(vdot, distanciaEmMetros) {
		if (this._isSlowVdot(vdot)) vdot = this._getSRVDOT(vdot);

		return this._getCustomEffortPace(vdot, distanciaEmMetros, 0.975);
	},

	getRepetitionPace(vdot, distanciaEmMetros) {
		const adjustment = (distanciaEmMetros / 400) * (6 / 60);

		return this.getIntervalPace(vdot, distanciaEmMetros) - adjustment;
	},

	getFastRepsPace(vdot, distanciaEmMetros) {
		const adjustment = (distanciaEmMetros / 200) * (4 / 60);

		return this.getRepetitionPace(vdot, distanciaEmMetros) - adjustment;
	},

	_isSlowVdot(vdot) {
		return vdot > 0 && vdot < this.SLOW_VDOT_LIMIT;
	},

	_getSRVDOT(vdot) {
		return (vdot * 2) / 3 + 13;
	},

	_getCustomEffortPace(vdot, distanciaEmMetros, effort) {
		const vo2 = vdot * effort;

		const velocity = this._getPaceVelocity(vo2);

		return distanciaEmMetros / velocity;
	},

	_getVO2(velocidade) {
		return 0.182258 * velocidade + 0.000104 * velocidade * velocidade - 4.6;
	},

	_getPaceVelocity(vo2) {
		return 29.54 + 5.000663 * vo2 - 0.007546 * vo2 * vo2;
	},

	_getVelocidadeMarathon(vdot) {
		const distance = 42195;

		let pace = distance / (4 * vdot);

		for (let i = 0; i < 3; i++) {
			const exp1 = Math.exp(-0.193261 * pace);

			const ratio = 0.298956 * exp1 + Math.exp(-0.012778 * pace) * 0.189439 + 0.8;

			const velocity = Math.pow(vdot * ratio, 2) * -0.0075 + vdot * ratio * 5.000663 + 29.54;

			const d1 = 0.298956 * exp1 * 0.19326;

			const d2 = d1 - Math.exp(-0.012778 * pace) * 0.189439 * -0.012778;

			const d3 = ratio * d2 * vdot * -0.007546 * 3;

			const dVelocity = d2 * vdot * 5.000663 + d3;

			const denominator = (distance * dVelocity) / Math.pow(velocity, 2) + 1;

			const error = pace - distance / velocity;

			const correction = error / denominator;

			pace = pace - correction;
		}

		return distance / pace;
	},
};

function faixa(valor, min, max) {
	return {
		min: valor * min,
		max: valor * max,
	};
}

function calcularRitmos(distanciaMetros, tempoMinutos) {
	const vdot = Daniels.getVDOT(distanciaMetros, tempoMinutos);

	const easyLento = Daniels.getEasyPace(vdot, 1000, true);

	const easyRapido = Daniels.getEasyPace(vdot, 1000, false);

	const easyMedio = (easyLento + easyRapido) / 2;

	const marathon = Daniels.getMarathonPace(vdot, 1000);

	const threshold1000m = Daniels.getThresholdPace(vdot, 1000);

	const interval1000m = Daniels.getIntervalPace(vdot, 1000);

	const interval800m = Daniels.getIntervalPace(vdot, 800);

	const interval400m = Daniels.getIntervalPace(vdot, 400);

	const interval200m = Daniels.getIntervalPace(vdot, 200);

	const repetition400m = Daniels.getRepetitionPace(vdot, 400);

	const fastReps = Daniels.getFastRepsPace(vdot, 200);

	return {
		vdot,
		easyMedio,
		marathon,
		threshold1000m,
		interval1000m,
		interval800m,
		interval400m,
		interval200m,
		repetition400m,
		fastReps,
	};
}

function calcularVariaveisTreino(metricas) {
	const {
		easyMedio,
		marathon,
		threshold1000m,
		interval1000m,
		interval800m,
		interval400m,
		interval200m,
		repetition400m,
		fastReps,
	} = metricas;

	return {
		levePadrao: faixa(easyMedio, 0.97, 1.01),

		longaoBase: faixa(easyMedio, 0.95, 1.04),

		aceleracao100: faixa(fastReps, 0.9, 1.0),

		interval800: faixa(interval800m, 0.99, 1.02),

		interval1000: faixa(interval1000m, 0.98, 1.01),

		limiarBase: faixa(threshold1000m, 0.98, 1.01),

		limiarConservador: faixa(threshold1000m, 1.0, 1.03),

		limiarModerado: faixa(threshold1000m, 0.99, 1.02),

		limiarDescarga: faixa(threshold1000m, 0.98, 1.01),

		limiarExato: faixa(threshold1000m, 0.97, 0.97),

		rep400Forte: faixa(repetition400m, 0.96, 0.99),

		rep400Padrao: faixa(repetition400m, 0.99, 1.03),

		int200Extensivo: faixa(interval200m, 1.0, 1.05),

		int200Velocidade: faixa(interval200m, 0.98, 1.02),

		marathonLongao: faixa(marathon, 0.96, 1.0),

		interval400Prova: faixa(interval400m, 1.0, 1.01),
	};
}
