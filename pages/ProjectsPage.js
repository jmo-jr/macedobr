import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="projetos" class="projetos panel visible">

		<glyphs-component></glyphs-component>
		
			<div class="container">

				<div class="d-flex flex-column justify-content-around align-items-center h-100" style="gap: 0">

					<div class="headlines">

						<div class="mobile_title-container">
							<h2>Projetos</h2>

							<div class="banner-glyph"></div>
						</div>

						<div class="headline">
							<p>Na AMBR, cada projeto é uma oportunidade de gerar impacto positivo. Atuamos em áreas como educação, meio ambiente, saúde e inclusão social, sempre com foco na transparência, responsabilidade social e participação comunitária.</p>
							<p class="green-text">Conheça nossas iniciativas, acompanhe os resultados e descubra como você também pode fazer parte dessa transformação!</p>
						</div>

					</div>

					<div class="logos-grid">
						<div class="d-flex justify-content-center align-items-center" style="gap:60px;">
							<div class="logo-container">
								<a href="#/projetos/bioarte">
									<img src="assets/bioarte.png" alt="Bioarte" title="Bioarte" class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="#/projetos/florescer">
									<img src="assets/florescer.png" alt="Florescer" title="Florescer"
										class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="#/projetos/escola-barbeiros">
									<img src="assets/barbearia.png" alt="Barbearia Garden" title="Barbearia Garden"
										class="logo">
								</a>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	`
}