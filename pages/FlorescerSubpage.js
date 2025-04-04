import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="atuacao" class="atuacao panel visible projeto">

		<glyphs-component></glyphs-component>

			<div class="container">

				<div class="d-flex justify-content-around">

					<div class="headlines project-subpage">

						<h2>
							<a href="#/projetos" class="breadcrumb-home">Projetos / </a>Florescer
						</h2>

						<div class="banner-glyph"></div>

						<p class="headline">O <strong>Projeto Florescer</strong> é uma iniciativa da AMBR em parceria com a Comunidade Evangélica Casa de Oração, em São Paulo, voltada para o reforço escolar e apoio social a crianças em situação de vulnerabilidade. No contraturno escolar, oferecemos aulas de Língua Portuguesa e Matemática, atividades lúdicas e culturais, além de lanche diário e suporte às famílias.</p>

						<div class="project-social">
							<a href="https://www.instagram.com/projetoflorescersp/" target="_blank" class="instagram">
								<i class="fa fa-instagram" aria-hidden="false"></i>
							</a>
							<a href="https://www.facebook.com/profile.php?id=61573527356565" target="_blank" class="facebook">
								<i class="fa fa-facebook" aria-hidden="alse"></i>
							</a>
						</div>

					</div>

					<div class="video-container">
						<div class="video-frame changes" style="background: url('assets/florescer.jpeg') no-repeat center center; background-size: cover;">
						</div>
					</div>

				</div>

			</div>
		</section>
	`
}