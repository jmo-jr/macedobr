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

					<div class="headlines" style="margin-top:160px; margin-left:100px; flex:1">

						<h2>
							<a href="#/projetos" class="breadcrumb-home">Projetos / </a>Escola de Barbeiros
						</h2>

						<div class="banner-glyph"></div>

						<p class="headline">A <strong>Escola de Barbeiros</strong>, uma iniciativa da AMBR em parceria com a Comunidade Evangélica Casa de Oração e a Barbearia Garden.com, em São Paulo, tem como objetivo capacitar jovens da comunidade para uma nova profissão, abrindo portas para o mercado de trabalho.</p>

						<p class="headline">Com aulas práticas e teóricas, os alunos aprendem técnicas de barbearia, atendimento ao cliente e gestão, desenvolvendo habilidades que podem transformar seu futuro. Acreditamos que, através da educação e da profissionalização, podemos gerar impacto social e criar oportunidades reais para quem deseja crescer!</p>

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
						<div class="video-frame changes" style="background: url('assets/barbeiros.jpeg') no-repeat center center; background-size: cover;">
						</div>
					</div>

				</div>

			</div>
		</section>
	`
}