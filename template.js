const plano = {
	base: {
		semanaA: {
			identificador: "A",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 6,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 800m",
							tempoEmMin: null,
							distanciaEmMetros: 800,
							repeticoes: 5,
							series: null,
							descansoEmMin: 2.5,
							ritmo: "interval800",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "forca e pliometria",
						},
					],
				},
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Threshold Continuo",
							tempoEmMin: null,
							distanciaEmMetros: 6000,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "limiarConservador",
							obs: null,
						},
						{
							tipo: "Repetition 400m",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 2,
							series: null,
							descansoEmMin: 2,
							ritmo: "rep400Padrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Longao",
							tempoEmMin: 75,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "longaoBase",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 3,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
		semanaB: {
			identificador: "B",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 6,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 1000m",
							tempoEmMin: null,
							distanciaEmMetros: 1000,
							repeticoes: 6,
							series: null,
							descansoEmMin: 3,
							ritmo: "interval1000",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "forca e pliometria",
						},
					],
				},
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Threshold Intervalado",
							tempoEmMin: 7,
							distanciaEmMetros: null,
							repeticoes: 5,
							series: null,
							descansoEmMin: [1.17, 1.5],
							ritmo: "limiarModerado",
							obs: null,
						},
						{
							tipo: "Repetition 400m",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 1,
							series: null,
							descansoEmMin: null,
							ritmo: "rep400Padrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [60, 75],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "longaoBase",
							obs: null,
						},
						{
							tipo: "Marathon",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "marathonLongao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 3,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [15, 20],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
		semanaC: {
			identificador: "C",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 6,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 1000m",
							tempoEmMin: null,
							distanciaEmMetros: 1000,
							repeticoes: 8,
							series: null,
							descansoEmMin: [3.5, 4],
							ritmo: "interval1000",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "forca e pliometria",
						},
					],
				},
			},

			quinta: {
				alternativas: [
					{
						nome: "OpcaoA",
						sessao1: {
							blocos: [
								{
									tipo: "Threshold Intervalado",
									tempoEmMin: 8,
									distanciaEmMetros: null,
									repeticoes: 4,
									series: null,
									descansoEmMin: 1.5,
									ritmo: "limiarModerado",
									obs: null,
								},
								{
									tipo: "Repetition 400m",
									tempoEmMin: null,
									distanciaEmMetros: 400,
									repeticoes: 1,
									series: null,
									descansoEmMin: null,
									ritmo: "rep400Forte",
									obs: null,
								},
							],
						},
						sessao2: {
							blocos: [
								{
									tipo: "Easy",
									tempoEmMin: [25, 30],
									distanciaEmMetros: null,
									repeticoes: null,
									series: null,
									descansoEmMin: null,
									ritmo: "levePadrao",
									obs: null,
								},
							],
						},
					},

					{
						nome: "OpcaoB",
						sessao1: {
							blocos: [
								{
									tipo: "Threshold Intervalado",
									tempoEmMin: 8,
									distanciaEmMetros: null,
									repeticoes: 4,
									series: null,
									descansoEmMin: 1.5,
									ritmo: "limiarModerado",
									obs: null,
								},
								{
									tipo: "Repetition 200m",
									tempoEmMin: null,
									distanciaEmMetros: 200,
									repeticoes: 8,
									series: null,
									descansoEmMin: 1.5,
									ritmo: "int200Velocidade",
									obs: "recuperacao: 200m trote ou 90s parado",
								},
							],
						},
						sessao2: {
							blocos: [
								{
									tipo: "Easy",
									tempoEmMin: [25, 30],
									distanciaEmMetros: null,
									repeticoes: null,
									series: null,
									descansoEmMin: null,
									ritmo: "levePadrao",
									obs: null,
								},
							],
						},
					},
				],
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Longao Maximo",
							tempoEmMin: [90, 105],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "longaoBase",
							obs: "sem aceleracoes",
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
		semanaD: {
			identificador: "D",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [15, 20],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 800m",
							tempoEmMin: null,
							distanciaEmMetros: 800,
							repeticoes: 4,
							series: null,
							descansoEmMin: 2.5,
							ritmo: "interval800",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 10,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "forca leve",
						},
					],
				},
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Threshold",
							tempoEmMin: null,
							distanciaEmMetros: [3000, 4000],
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "limiarDescarga",
							obs: null,
						},
						{
							tipo: "Repetition 400m",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 1,
							series: null,
							descansoEmMin: null,
							ritmo: "rep400Padrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 15,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Longao Reduzido",
							tempoEmMin: [50, 70],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "longaoBase",
							obs: null,
						},
					],
				},

				sessao2: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 10,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
	},
	temporada: {
		P1: {
			identificador: "P1",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [40, 50],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 5,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 1000m",
							tempoEmMin: null,
							distanciaEmMetros: 1000,
							repeticoes: 4,
							series: null,
							descansoEmMin: 3,
							ritmo: "interval1000",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: null,
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [25, 30],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Threshold",
							tempoEmMin: null,
							distanciaEmMetros: 4000,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "limiarConservador",
							obs: null,
						},
						{
							tipo: "Interval 400m Prova",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 1,
							series: null,
							descansoEmMin: null,
							ritmo: "interval400Prova",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 30,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 3,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 50,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 2,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
		P2: {
			identificador: "P2",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [30, 35],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 1000m",
							tempoEmMin: null,
							distanciaEmMetros: 1000,
							repeticoes: 3,
							series: null,
							descansoEmMin: 3,
							ritmo: "interval1000",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: null,
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 1000m",
							tempoEmMin: null,
							distanciaEmMetros: 1000,
							repeticoes: 2,
							series: null,
							descansoEmMin: 3,
							ritmo: "interval1000",
							obs: "recuperacao em trote",
						},
						{
							tipo: "Interval 400m Prova",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 1,
							series: null,
							descansoEmMin: null,
							ritmo: "interval400Prova",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 30,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 3,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 40,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 2,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Recuperacao Ativa",
							tempoEmMin: null,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: null,
							obs: "mobilidade, core e recuperacao ativa",
						},
					],
				},

				sessao2: null,
			},
		},
		P3: {
			identificador: "P3",

			segunda: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: [20, 25],
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			terca: {
				sessao1: {
					blocos: [
						{
							tipo: "Interval 400m",
							tempoEmMin: null,
							distanciaEmMetros: 400,
							repeticoes: 4,
							series: null,
							descansoEmMin: 2,
							ritmo: "interval400Prova",
							obs: "recuperacao em trote",
						},
					],
				},

				sessao2: null,
			},

			quarta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			quinta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: null,
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 4,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sexta: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "se competicao no domingo, do contrario 10min",
						},
						{
							tipo: "Aceleracoes",
							tempoEmMin: null,
							distanciaEmMetros: 100,
							repeticoes: 3,
							series: null,
							descansoEmMin: null,
							ritmo: "aceleracao100",
							obs: null,
						},
					],
				},

				sessao2: null,
			},

			sabado: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 10,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "se competicao no domingo, do contrario descanso",
						},
					],
				},

				sessao2: null,
			},

			domingo: {
				sessao1: {
					blocos: [
						{
							tipo: "Easy",
							tempoEmMin: 20,
							distanciaEmMetros: null,
							repeticoes: null,
							series: null,
							descansoEmMin: null,
							ritmo: "levePadrao",
							obs: "se competicao no sabado, do contrario prova",
						},
					],
				},

				sessao2: null,
			},
		},
	},
};

globalThis.plano = plano;
