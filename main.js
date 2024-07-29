const { createApp } = Vue

	createApp({
		setup() {
			return {
				items: {
					certidoes: [
						{ 
							name: 'Nenhuma certidão foi disponibilizada',
							link: ""
						},
					],
					certificados: [],
					chamamentos: [],
					regulamentos: [
						{
							name: "Proposta de Regulamento de Contratação de Pessoal",
							link: "https://drive.google.com/uc?export=download&id=1xcPvXdCUKkpmYuu2Ltyo4eh2_jAwI2GW"
						},
						{
							name: "Regulamento de Compra AMBR",
							link: "https://drive.google.com/uc?export=download&id=1pXUrHC0_ZgRDje4qFNWBv9qE2FIIAkO3"
						},
					],
					termos: []
				},
			}
		}
	}).mount('#accTransparencia')