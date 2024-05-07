const { createApp } = Vue

	createApp({
		setup() {
			return {
				items: {
					certidoes: [
						{ 
							name: 'Nenhuma certidão foi disponibilizada',
							link: ''
						},
					],
					certificados: [],
					chamamentos: [],
					regulamentos: [],
					termos: []
				},
			}
		}
	}).mount('#accTransparencia')