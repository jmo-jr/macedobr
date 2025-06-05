import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section class="transparencia">

			<glyphs-component></glyphs-component>

				<div class="container">
				
					<h2 class="page-title">Portal de Transparência</h2>

					<div class="d-flex mt-5">
						<a href="#/transparencia/certidoes">
							<img src="../assets/certidoes.png" alt="Certidões" style="width: 140px">
						</a>
						<a>
							<img src="../assets/certificados.png" alt="Certificados" style="width: 140px">
						</a>
						<a href="#/transparencia/estatutos">
							<img src="../assets/estatuto.png" alt="Estatutos" style="width: 140px">
						</a>
						<a href="#/transparencia/regulamentos">	
							<img src="../assets/regulamentos.png" alt="Regulamentos" style="width: 140px">
						</a>
						<a href="#/transparencia/prestacao-de-contas">	
							<img src="../assets/prestacao.png" alt="Prestação de Contas" style="width: 140px">
						</a>
					</div>

				</div>

      </section>
	`
}