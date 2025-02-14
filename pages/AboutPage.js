export default {
	template: `
		<section id="quem" class="panel visible">
			<div class="container h-100">

				<header class="secondary-header">
					<nav class="nav">
						<div style="margin-left:-40px">
							<a class="navbar-brand nav-js" href="#home" data-panel="home">
								<img src="assets/logo_ambr_cor.png" alt="Associação Macedo Brasil">
							</a>
						</div>
					</nav>
				</header>

				<div class="d-flex justify-content-around h-100">

					<div class="title-container">
						<h3 class="subtitle">
							<div>Quem Somos</div>
						</h3>
					</div>

					<div class="headlines">

						<!-- TABS -->
						<ul class="nav nav-tabs" id="quemTabs" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active" id="who-tab" data-bs-toggle="tab" data-bs-target="#who"
									data-video="assets/quemsomos.mp4" type="button" role="tab" aria-controls="who"
									aria-selected="true">Quem Somos</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="vision-tab" data-bs-toggle="tab" data-bs-target="#vision"
									data-video="assets/visao.mp4" type="button" role="tab" aria-controls="vision"
									aria-selected="false">Nossa Visão</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="mission-tab" data-bs-toggle="tab" data-bs-target="#mission"
									data-video="assets/missao.mp4" type="button" role="tab" aria-controls="mission"
									aria-selected="false">Nossa Missão</button>
							</li>
						</ul>

						<!-- Tab Content -->
						<div class="tab-content" id="quemTabContent">
							<div class="tab-pane fade show active" id="who" role="tabpanel" aria-labelledby="who-tab">
								<div class="banner-glyph"></div>
								<p class="headline">A Associação Macedo Brasil – AMBR, entidade civil sem fins lucrativos, dedica-se a
									estabelecer parcerias tanto no âmbito público quanto privado. Nosso compromisso é alcançar resultados
									significativos nas áreas de desenvolvimento urbano, novas tecnologias, saúde, socioambientais e
									socioeducacionais, promovendo a melhoria contínua da qualidade de vida e do bem-estar em comunidades.
								</p>
							</div>
							<div class="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="vision-tab">
								<div class="banner-glyph"></div>
								<p class="headline">Unidos, somos agentes de transformação para promover a dignidade humana em seu
									ambiente, impulsionando o desenvolvimento social, físico e psicológico.</p>
							</div>
							<div class="tab-pane fade" id="mission" role="tabpanel" aria-labelledby="mission-tab">
								<div class="banner-glyph"></div>
								<div class="headline mission-variant">
									<p>Orientamos nossa missão com objetivos claros de fomentar o desenvolvimento humano e a
										sustentabilidade, fundamentados nos direitos consagrados pela Constituição Federal:</p>
									<div class="multi-columns">
										<ul>
											<li>Assegurar o direito à vida, liberdade, igualdade, segurança e propriedade;</li>
											<li>Atuar como agentes de promoção dos direitos sociais, incluindo educação, saúde, alimentação,
												trabalho, moradia, transporte, lazer, segurança, proteção à maternidade, infância e assistência
												aos desamparados; </li>
											<li>Facilitar o acesso à cultura, educação, ciência, tecnologia, pesquisa e inovação;</li>
											<li>Desenvolver soluções voltadas para a preservação do meio ambiente e o combate à poluição em
												todas as suas formas.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<!-- Video -->
						<div class="video-container">
							<div class="video-frame changes" style="background-color:white">
								<video id="vidQuem" class="video-player" data-src="assets/quemsomos.mp4" autoplay muted loop>
									<source src="assets/quemsomos.mp4" type="video/mp4">
								</video>
							</div>
						</div>

					</div>

				</div>

			</div>
		</section>
	`
}