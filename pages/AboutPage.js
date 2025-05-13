import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	data() {
		return {
			isPageLoading: true,
			currentVideo: "assets/videos/quemsomos.webm",
			currentPoster: "assets/capas/quemsomos.jpg"
		}
	},
	methods: {
    changeVideo(videoSrc, poster) {
      this.currentVideo = videoSrc;
			this.currentPoster = poster;
    },
		checkPageLoaded() {
				this.isPageLoading = true; // Mantém o loading ativo

				this.$nextTick(() => {
						const videos = document.querySelectorAll("video");
						let loadedCount = 0;

						if (videos.length === 0) {
								this.isPageLoading = false; // Se não houver vídeos, remove o loading
								return;
						}

						videos.forEach(video => {
								video.oncanplaythrough = () => {
										loadedCount++;
										if (loadedCount === videos.length) {
												this.isPageLoading = false; // Remove o loading quando todos carregarem
										}
								};
						});
				});
		}
  },
	template: `
		<section id="quem" class="quem panel visible">

			<glyphs-component></glyphs-component>

			<!-- Tela de Loading -->
			<div v-if="isPageLoading" class="loading-screen">
				<div class="spinner"></div>
				<p>Carregando...</p>
			</div>

			<div v-if="!isPageLoading" class="container h-100">

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
								<button class="nav-link active" id="who-tab" data-bs-toggle="tab" data-bs-target="#who" @click="changeVideo('assets/videos/quemsomos.webm', 'assets/capas/quemsomos.jpg')" type="button" role="tab" aria-controls="who"
									aria-selected="true">Quem Somos</button>
							</li>

							<li class="nav-item" role="presentation">
								<button class="nav-link" id="vision-tab" data-bs-toggle="tab" data-bs-target="#vision" @click="changeVideo('assets/videos/visao.webm', 'assets/capas/visao.jpg')" type="button" role="tab" aria-controls="vision"
									aria-selected="false">Nossa Visão</button>
							</li>

							<li class="nav-item" role="presentation">
								<button class="nav-link" id="mission-tab" data-bs-toggle="tab" data-bs-target="#mission" @click="changeVideo('assets/videos/missao.webm', 'assets/capas/missao.jpg')" type="button" role="tab" aria-controls="mission"
									aria-selected="false">Nossa Missão</button>
							</li>
							
						</ul>

						<div class="tab-content" id="quemTabContent">

							<!-- Tab 1 -->
							<div class="tab-pane fade show active" id="who" role="tabpanel" aria-labelledby="who-tab">

								<div class="mobile title-container">
									<h3 class="subtitle">
										<div>Quem Somos</div>
									</h3>
									<div class="banner-glyph_2"></div>
								</div>

								<div class="banner-glyph"></div>

								<!-- Video -->
								<div class="mobile video-container">
									<div class="video-frame changes" style="background-color:white">
										<video id="vidQuem" class="video-player" :src="currentVideo" poster="assets/capas/quemsomos.jpg" autoplay loop>
											<source :src="currentVideo" type="video/mp4">
											Seu navegador não suporta vídeos.
										</video>
									</div>
								</div>

								<p class="headline">
									<span class="green-text">A Associação Macedo Brasil – AMBR, entidade civil sem fins lucrativos, dedica-se a estabelecer parcerias tanto no âmbito público quanto privado.</span>
									<br>
									Nosso compromisso é alcançar resultados significativos nas áreas de  desenvolvimento urbano, novas tecnologias, saúde, socioambientais e
									socioeducacionais, promovendo a melhoria contínua da qualidade de vida e do bem-estar em comunidades.
								</p>

							</div>

							<!-- Tab 2 -->
							<div class="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="vision-tab">

								<div class="mobile title-container">
									<h3 class="subtitle">
										<div>Nossa Visão</div>
									</h3>
									<div class="banner-glyph_2"></div>
								</div>

								<div class="banner-glyph"></div>

								<!-- Video -->
								<div class="mobile video-container">
									<div class="video-frame changes" style="background-color:white">
										<video id="vidQuem" class="video-player" :src="currentVideo" poster="assets/capas/visao.jpg" autoplay loop>
											<source :src="currentVideo" type="video/mp4">
											Seu navegador não suporta vídeos.
										</video>
									</div>
								</div>

								<p class="headline" style="width: 70%;line-height: 1.4;">
									Unidos, somos agentes de transformação para promover a dignidade humana em seu
									ambiente, impulsionando o desenvolvimento social, físico e psicológico.
								</p>
							</div>

							<!-- Tab 3 -->
							<div class="tab-pane fade" id="mission" role="tabpanel" aria-labelledby="mission-tab">

								<div class="mobile title-container">
									<h3 class="subtitle">
										<div>Nossa Missão</div>
									</h3>
									<div class="banner-glyph_2"></div>
								</div>

								<div class="banner-glyph"></div>

								<!-- Video -->
								<div class="mobile video-container">
									<div class="video-frame changes" style="background-color:white">
										<video id="vidQuem" class="video-player" :src="currentVideo" poster="assets/capas/missao.jpg" autoplay loop>
											<source :src="currentVideo" type="video/mp4">
											Seu navegador não suporta vídeos.
										</video>
									</div>
								</div>

								<div class="headline limited">
									<p>
										Orientamos nossa missão com objetivos claros de fomentar o desenvolvimento humano e a sustentabilidade, fundamentados nos direitos consagrados pela Constituição Federal:
									</p>

									<ul class="green-text">
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

						<!-- Video -->
						<div class="video-container">
							<div class="video-frame changes" style="background-color:white">
								<video id="vidQuem" class="video-player" :src="currentVideo" :poster="currentPoster" autoplay loop>
									<source :src="currentVideo" type="video/mp4">
									Seu navegador não suporta vídeos.
								</video>
							</div>
						</div>

					</div>

				</div>

			</div>
		</section>
	`,
	beforeMount() {
			this.checkPageLoaded(); // Executa o loading ao carregar a página
	},
	watch: {
			'$el': function () {
					this.checkPageLoaded(); // Executa toda vez que o componente for montado na tela
			}
	}
}