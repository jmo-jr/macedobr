const { createApp } = Vue
	
	createApp({
		created() {
			const params = new URLSearchParams(window.location.search);
			this.id = params.get('id');
		},
		computed: {
			filteredData() {
				if (this.id) {
					return this.items.termos.filter(item => item.id === parseInt(this.id));
				}
				return this.item.termos;
			}
		},
		setup() {
			return {
				termId: null,
				items: {
					chamamentos: [
						{
							termId: 1,
							name: 'Nenhum chamamento disponível',
							link: "#"
						}
					],
					contas: [
						{
							termId: 1,
							name: 'Nenhuma prestação de conta disponível',
							link: "#"
						}
					],
					termos: [
						{
							id: 1,
							name: 'Termo de Colaboração 01 - Creche 1 Pontal',
							link: "https://drive.google.com/file/d/1Hj2FEoxeylQe2GqRCsvVe_vOY4E9JXf6/view?usp=sharing"
						},
						{
							id: 2,
							name: 'Termo de Colaboração 02 - Creche 2 Pindorama',
							link: "https://drive.google.com/file/d/1heeVcISCmM5hX5b-f89BK_98ilridRlC/view?usp=sharing"
						},
						{
							id: 6,
							name: 'Termo de Colaboração 06 - Praça do Hospital',
							link: "https://drive.google.com/file/d/1_0dNdtpmDqW4ZB5OWrpFIJkmQ2DO3iBM/view?usp=sharing"
						},
						{
							id: 7,
							name: 'Termo de Colaboração 07 - Usina de Geração de Energia Solar',
							link: "https://drive.google.com/file/d/1K9JMwxYFwK0J5rHS6TqFrPVU6uyYucse/view?usp=sharing"
						},
						{
							id: 11,
							name: 'Termo de Colaboração 11 - Praça da Constituição',
							link: "https://drive.google.com/file/d/11fLK9svdBOq-26KKxtM6NiIynUQ0zlVU/view?usp=sharing"
						},
						{
							id: 20,
							name: 'Termo de Colaboração 20 - Iluminação Pública',
							link: "https://drive.google.com/file/d/1dNOls2KPF5-lFRHgyEDJxHnUCCSXBtkP/view?usp=sharing"
						},
					]
				},
			}
		}
	}).mount('#docsTermos')