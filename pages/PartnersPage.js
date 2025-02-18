import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="parcerias" class="parcerias panel visible">

		<glyphs-component></glyphs-component>
			<div class="container">

				<div class="d-flex justify-content-around align-items-center h-100">

					<div class="headlines">

						<h2>Parcerias</h2>

						<div class="banner-glyph"></div>

						<div class="headline">
							<p>A AMBR busca fortalecer parcerias entre governos e o terceiro setor para cumprir seus objetivos, apoiar a elaboração de políticas públicas e projetos de lei nas áreas de gestão pública, participação social, transparência, meio ambiente e sustentabilidade. Celebramos Termos de Colaboração, Contratos de Gestão, Acordos de Cooperação e outros instrumentos com entidades públicas e privadas, respeitando a legislação vigente.</p>
							<p>Por isso agradecemos todos os nossos parceiros que estão transformando vidas conosco!</p>
						</div>

					</div>

					<div class="logos-grid">
						<div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:24px;">
							<div class="logo-container">
								<a href="#">
									<img src="assets/pmcoruripe.jpg" alt="Prefeitura de Coruripe"
										title="Prefeitura Municipal de Coruripe/AL" class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="#">
									<img src="assets/cognvox.jpeg" alt="Cognvox" title="Cognvox - Software de desenvolvimento cognitivo"
										class="logo">
								</a>
							</div>
							<div class="logo-container">
								<a href="#">
									<img src="assets/casadeoracao.png" alt="Casa de Oração" title="Casa de Oração"
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