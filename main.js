const { createApp } = Vue

	createApp({
		setup() {
			return {
				items: {
					certidoes: [
						{ 
							name: 'Certidão Estadual',
							link: "https://drive.google.com/file/d/1-4YudQSRNxDLdLJAZLv5OwZmimY8Hhh_/view?usp=sharing"
						},
						{ 
							name: 'Certidão Federal',
							link: "https://drive.google.com/file/d/17qRsbwDOGtvmnMHjyJ5l9S8T3GWKWFe3/view?usp=sharing"
						},
						{ 
							name: 'Certidão Municipal',
							link: "https://drive.google.com/file/d/1GJqVK5qDK-iNC0lu9JPK8d3zcgWRvR7J/view?usp=sharing"
						},
						{ 
							name: 'Certidão FGTS',
							link: "https://drive.google.com/file/d/1qkD5r5mKDacjKD6yXFnIGNZpezD6labJ/view?usp=sharing"
						},
						{ 
							name: 'Certidão Trabalhista',
							link: "https://drive.google.com/file/d/1u-0d5Lp8SlR28rBIXOp0UloxQ-rNGDYc/view?usp=sharing"
						},
					],
					certificados: [
						{
							name: 'Nenhum certificado disponível',
							link: "#"
						}
					],
					chamamentos: [
						{
							name: 'Nenhum chamamento disponível',
							link: ""
						}
					],
					estatuto: [
						{
							name: 'Estatuto Associação Macedo Brasil',
							link: "https://drive.google.com/file/d/19UFbrH_LkfIr860cSNd8T7usKqysHZ7j/preview"
						}
					],
					regulamentos: [
						{
							name: 'Nenhum regulamento disponível',
							link: "#"
						}
					],
					termos: [
						{
							name: 'Termo de Colaboração 11 - Praça da Constituição',
							link: "https://drive.google.com/file/d/11fLK9svdBOq-26KKxtM6NiIynUQ0zlVU/view?usp=sharing"
						},
						{
							name: 'Termo de Colaboração 01 - Creche 1 Pontal',
							link: "https://drive.google.com/file/d/1Hj2FEoxeylQe2GqRCsvVe_vOY4E9JXf6/view?usp=sharing"
						},
						{
							name: 'Termo de Colaboração 07 - Usina de Geração de Energia Solar',
							link: "https://drive.google.com/file/d/1K9JMwxYFwK0J5rHS6TqFrPVU6uyYucse/view?usp=sharing"
						},
						{
							name: 'Termo de Colaboração 06 - Praça do Hospital',
							link: "https://drive.google.com/file/d/1_0dNdtpmDqW4ZB5OWrpFIJkmQ2DO3iBM/view?usp=sharing"
						},
						{
							name: 'Termo de Colaboração 20 - Iluminação Pública',
							link: "https://drive.google.com/file/d/1dNOls2KPF5-lFRHgyEDJxHnUCCSXBtkP/view?usp=sharing"
						},
						{
							name: 'Termo de Colaboração 02 - Creche 2 Pindorama',
							link: "https://drive.google.com/file/d/1heeVcISCmM5hX5b-f89BK_98ilridRlC/view?usp=sharing"
						},
					]
				},
			}
		}
	}).mount('#accTransparencia')