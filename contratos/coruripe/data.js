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
			},
			filteredAditivos() {
				const arrayName = this.items.aditivos
				if (this.id) {
					return arrayName.filter(item => item.termId === parseInt(this.id));
				}
				return arrayName;
			},
			filteredDocs() {
				let arrayName = this.items.chamamentos
				if (this.id) {
					return arrayName.filter(item => item.termId === parseInt(this.id));
				}
				return arrayName;
			},
		},
		setup() {
			return {
				termId: null,
				items: {
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
							name: 'Termo de Colaboração 11 - Unidade Mista de Saúde Pindorama',
							link: "https://drive.google.com/file/d/11fLK9svdBOq-26KKxtM6NiIynUQ0zlVU/view?usp=sharing"
						},
						{
							id: 16,
							name: 'Termo de Colaboração 16 - Praça Miaí de Cima',
							link: "https://drive.google.com/file/d/1_AehLuVK1k-mDvnntI730UC2tJFTjIBH/view?usp=drive_link"
						},
						{
							id: 18,
							name: 'Termo de Colaboração 18 - Praça Miaí de Baixo',
							link: "https://drive.google.com/file/d/1DwAhGWIqG2ayxw6pClskeOeu9rs5iwLZ/view?usp=drive_link"
						},
						{
							id: 20,
							name: 'Termo de Colaboração 20 - Iluminação Pública',
							link: "https://drive.google.com/file/d/1dNOls2KPF5-lFRHgyEDJxHnUCCSXBtkP/view?usp=sharing"
						},
					],
					aditivos: [
						{
							termId: 1,
							name: 'Termo Aditivo de Colaboração 01 - Creche 1 Pontal',
							link: "https://drive.google.com/file/d/1DyakQWsq0YyufQOuzLnEsLFmXUdLaLeR/view?usp=sharing"
						},
						{
							termId: 2,
							name: 'Termo Aditivo de Colaboração 02 - Creche 2 Pindorama',
							link: "https://drive.google.com/file/d/1d40VrgeJIDCcebG3fqfPmK0KU7YxbmJ4/view?usp=sharing"
						},
						{
							termId: 11,
							name: 'Termo Aditivo de Colaboração 11 - Praça da Constituição',
							link: "https://drive.google.com/file/d/14gOC51kzY7B4nzEQs_Sc1q-CDJC9i7ev/view?usp=sharing"
						},
						{
							termId: 16,
							name: 'Termo Aditivo de Colaboração 16 - Mirante e Praça Lateral Santa Imaculada da Conceição',
							link: "https://drive.google.com/file/d/1GxWRnkcYCpDDbeclXFPqgFu91g9Ir95R/view?usp=drive_link"
						},
						{
							termId: 18,
							name: 'Termo Aditivo de Colaboração 18 - Letreiro com Nome do Município',
							link: "https://drive.google.com/file/d/17UyadX_NQq6dgs_zatLPaiQfomUoQdv5/view?usp=drive_link"
						},
					],
					chamamentos: [
						{
							termId: 1,
							name: 'Aviso de Contratação 01 - Creche 1 Pontal',
							link: "https://drive.google.com/file/d/1ELiNzO-GPVEb7_FOoP-vPhfbmb7mDDah/view?usp=sharing"
						},
						{
							termId: 2,
							name: 'Aviso de Contratação 02 - Creche 2 Pindorama',
							link: "https://drive.google.com/file/d/1P6C6o3wdvhXZYNwPHvtlOrxKy-T5ojdf/view?usp=sharing"
						},
						{
							termId: 6,
							name: 'Aviso de Contratação 06 - Praça do Hospital',
							link: "https://drive.google.com/file/d/1UqllNArLC-puH8LmUIjdpLVlGB-gnkHF/view?usp=sharing"
						},
						{
							termId: 7,
							name: 'Aviso de Contratação 07 - Usina de Geração de Energia Solar',
							link: "https://drive.google.com/file/d/14iqA_F_-aRKmDBQkfqu5bLk8-8D_8pwa/view?usp=sharing"
						},
						{
							termId: 11,
							name: 'Aviso de Contratação 11 - Praça da Constituição',
							link: "https://drive.google.com/file/d/1rJf6jC8txRgN_MWHIkeDUvT9OzLInKsD/view?usp=sharing"
						}
					],
					contas: [
						{
							termId: 1,
							name: 'Nenhuma prestação de conta disponível',
							link: "#"
						}
					],
					funcionarios: [
						{
							id: 1,
							name: 'Relação de Colaboradores',
							link: 'https://drive.google.com/file/d/1ekOJvddq0CZCo_JYbCLaR4bxreOqSXnp/preview'
						},
					]
				},
			}
		}
	}).mount('#docsTermos')