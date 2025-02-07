const { createApp } = Vue

	createApp({
		setup() {
			return {
				items: {
					certidoes: [
						{ 
							name: 'CNPJ',
							link: "https://drive.google.com/file/d/1cin4imrbz1G9rvz3ImLuL6RQZVCi1COW/preview"
						},
						{ 
							name: 'Certidão Federal',
							link: "https://drive.google.com/file/d/1krWV3lH88ccBYNnjrosimrOMeLo-_PKy/preview"
						},
						{ 
							name: 'Certidão Estadual',
							link: "https://drive.google.com/file/d/1gmp1CzdvlIdtfmjoY7jWYy1s_1_e36lj/preview"
						},
						{ 
							name: 'Certidão Municipal',
							link: "https://drive.google.com/file/d/1FhLx5W-MdTT4vYAsh38qiDigN2_ABs66/preview"
						},
						{ 
							name: 'Certidão FGTS',
							link: "https://drive.google.com/file/d/1ZfJ9BnF4kPlQqxN3g1aB0rAJZsLbZ8ij/preview"
						},
						{ 
							name: 'Certidão Trabalhista',
							link: "https://drive.google.com/file/d/1pIlS_wLD9hFtZC2lKX006UHG4N4SBAl_/preview"
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
							name: 'Regulamento de Compra AMBR',
							link: "https://drive.google.com/file/d/1dcWUpZsSZ03L7mv_PZ6v38bh3a7PgHgR/preview"
						},
						{
							name: 'Regulamento de Contratação de Pessoal AMBR',
							link: "https://drive.google.com/file/d/1EMETqM515GoJg4DrfxqOmOyzI_rG5z3R/preview"
						},
					],
					termos: [
						{
							name: 'Termo de Colaboração 11 - Praça da Constituição',
							link: "https://drive.google.com/file/d/11fLK9svdBOq-26KKxtM6NiIynUQ0zlVU/preview"
						},
						{
							name: 'Termo de Colaboração 01 - Creche 1 Pontal',
							link: "https://drive.google.com/file/d/1Hj2FEoxeylQe2GqRCsvVe_vOY4E9JXf6/preview"
						},
						{
							name: 'Termo de Colaboração 07 - Usina de Geração de Energia Solar',
							link: "https://drive.google.com/file/d/1K9JMwxYFwK0J5rHS6TqFrPVU6uyYucse/preview"
						},
						{
							name: 'Termo de Colaboração 06 - Praça do Hospital',
							link: "https://drive.google.com/file/d/1_0dNdtpmDqW4ZB5OWrpFIJkmQ2DO3iBM/preview"
						},
						{
							name: 'Termo de Colaboração 20 - Iluminação Pública',
							link: "https://drive.google.com/file/d/1dNOls2KPF5-lFRHgyEDJxHnUCCSXBtkP/preview"
						},
						{
							name: 'Termo de Colaboração 02 - Creche 2 Pindorama',
							link: "https://drive.google.com/file/d/1heeVcISCmM5hX5b-f89BK_98ilridRlC/preview"
						},
					]
				},
			}
		}
	}).mount('#accTransparencia')