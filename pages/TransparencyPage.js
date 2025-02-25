import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section class="transparencia">

			<glyphs-component></glyphs-component>

				<h2 class="page-title">Portal de Transparência</h2>

				<div class="d-flex mt-5">
					<a href="#/transparencia/certidoes">
						<div class="flex-centered folder-block">
							<span class="text-uppercase text-light">Certidões</span>
						</div>
					</a>
					<a>
						<div class="flex-centered folder-block">
							<span class="text-uppercase text-light">Certificados</span>
						</div>
					</a>
					<a href="#/transparencia/estatutos">
						<div class="flex-centered folder-block">
							<span class="text-uppercase text-light">Estatuto</span>
						</div>
					</a>
					<a href="#/transparencia/regulamentos">	
						<div class="flex-centered folder-block">
							<span class="text-uppercase text-light" style="font-size:14px">Regulamentos</span>
						</div>
					</a>
				</div>

      </section>
	`
}