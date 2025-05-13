import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="parcerias" class="parcerias panel visible">

		<glyphs-component></glyphs-component>
			<div class="container">

				<div class="d-flex justify-content-around align-items-center h-100 dt-flex-column">

					<div class="headlines">

						<div class="mobile_title-container">
							<h2>PARCERIAS</h2>

							<div class="banner-glyph"></div>
						</div>

						<div class="headline">
							<p>A AMBR busca fortalecer parcerias entre governos e o terceiro setor para cumprir seus objetivos, apoiar a elaboração de políticas públicas e projetos de lei nas áreas de gestão pública, participação social, transparência, meio ambiente e sustentabilidade. Celebramos Termos de Colaboração, Contratos de Gestão, Acordos de Cooperação e outros instrumentos com entidades públicas e privadas, respeitando a legislação vigente.</p>
						</div>

					</div>

					<div class="logos-grid">
						<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:24px;">
							<div class="logo-container">
								<a href="https://site.coruripe.al.gov.br/"  target="_blank">
									<img src="assets/pmcoruripe.jpg" alt="Prefeitura de Coruripe"
										title="Prefeitura Municipal de Coruripe/AL" class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="https://cognvox.com.br/" target="_blank">
									<img src="assets/cognvox.jpeg" alt="Cognvox" title="Cognvox - Software de desenvolvimento cognitivo"
										class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="https://www.instagram.com/casadeoracao.cop?igsh=amZzMHd5aGFpZGll" target="_blank">
									<img src="assets/casadeoracao.png" alt="Casa de Oração" title="Casa de Oração"
										class="logo">
								</a>
							</div>
						</div>
					</div>

					<p class="offhead green-text">Por isso agradecemos todos os nossos parceiros que estão transformando vidas conosco!</p>

				</div>

			</div>
		</section>
	`
}