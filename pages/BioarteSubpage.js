import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="atuacao" class="atuacao panel visible projeto">

		<glyphs-component></glyphs-component>

			<div class="container">

				<header class="secondary-header display-none">
					<nav class="nav">
						<div style="margin-left:-40px">
							<a class="navbar-brand" href="#">
								<img src="assets/logo_ambr_cor.png" alt="Associação Macedo Brasil">
							</a>
						</div>
					</nav>
				</header>

				<div class="d-flex justify-content-around">

					<div class="headlines" style="margin-top:160px; margin-left:100px; flex:1">

						<h2>
							<a href="#/projetos" class="breadcrumb-home">Projetos / </a>Bioarte
						</h2>

						<div class="banner-glyph"></div>

						<p class="headline">O <strong>Projeto Bioarte</strong>, em Coruripe-AL, é uma iniciativa da AMBR que une sustentabilidade, educação e inclusão social. Através de ações socioambientais, incentivamos práticas sustentáveis, a economia criativa e a valorização do meio ambiente.</p>
						<p class="headline">Capacitamos a comunidade com oficinas, atividades educativas e apoio à bioprodução, fortalecendo a consciência ecológica e gerando novas oportunidades. Juntos, estamos transformando realidades e construindo um futuro mais sustentável!</p>

						<div class="project-social">
							<a href="https://www.instagram.com/" target="_blank" class="instagram">
								<i class="fa fa-instagram" aria-hidden="false"></i>
							</a>
							<a href="https://www.facebook.com/profile.php?id=" target="_blank" class="facebook">
								<i class="fa fa-facebook" aria-hidden="alse"></i>
							</a>
						</div>

					</div>

					<div class="video-container">
						<div class="video-frame changes" style="background: url('assets/bioarte.jpeg') no-repeat center center; background-size: cover;">
						</div>
					</div>

				</div>

			</div>
		</section>
	`
}