import HeaderComponent from './components/HeaderComponent.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import PartnersPage from './pages/PartnersPage.js';
import PerformancePage from './pages/PerformancePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import BioarteSubpage from './pages/BioarteSubpage.js';
import FlorescerSubpage from './pages/FlorescerSubpage.js';
import BarbeirosSubpage from './pages/EscBarbeirosSubpage.js';
import TransparencyPage from './pages/TransparencyPage.js';
import CertidoesPage from './pages/CertidoesPage.js';
import EstatutosPage from './pages/EstatutosPage.js';
import RegulamentosPage from './pages/RegulamentosPage.js';
import ContactPage from './pages/ContactPage.js';
import CoruripePage from './pages/CoruripePage.js';

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/sobre', component: AboutPage },
	{ path: '/parcerias', component: PartnersPage },
	{ path: '/atuacao', component: PerformancePage },
	{ path: '/projetos', component: ProjectsPage },
	{ path: '/projetos/bioarte', component: BioarteSubpage },
	{ path: '/projetos/florescer', component: FlorescerSubpage },
	{ path: '/projetos/escola-barbeiros', component: BarbeirosSubpage },
	{ path: '/transparencia', component: TransparencyPage },
	{ path: '/transparencia/certidoes', component: CertidoesPage },
	{ path: '/transparencia/estatutos', component: EstatutosPage },
	{ path: '/transparencia/regulamentos', component: RegulamentosPage },
	{ path: '/contato', component: ContactPage },
	{ path: '/contratos/coruripe', redirect: () => window.location.href = '/contratos/coruripe/' }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const docs = {
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
			link: "https://drive.google.com/file/d/1ZvMRUYFxIg6A563gIjd9S2LUC6qO6Gid/preview"
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
};

createApp({
	components: {
		HeaderComponent
	},
	provide() {
    return {
      docs,
    };
  },
})
.use(router)
.mount('#app');