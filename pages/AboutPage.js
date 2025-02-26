import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	data() {
		return {
			isPageLoading: true,
			currentVideo: "assets/videos/quemsomos.mp4",
		}
	},
	methods: {
    changeVideo(videoSrc) {
      this.currentVideo = videoSrc;
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
								<button class="nav-link active" id="who-tab" data-bs-toggle="tab" data-bs-target="#who" @click="changeVideo('assets/videos/quemsomos.mp4')" type="button" role="tab" aria-controls="who"
									aria-selected="true">Quem Somos</button>
							</li>

							<li class="nav-item" role="presentation">
								<button class="nav-link" id="vision-tab" data-bs-toggle="tab" data-bs-target="#vision" @click="changeVideo('assets/videos/visao.mp4')" type="button" role="tab" aria-controls="vision"
									aria-selected="false">Nossa Visão</button>
							</li>

							<li class="nav-item" role="presentation">
								<button class="nav-link" id="mission-tab" data-bs-toggle="tab" data-bs-target="#mission" @click="changeVideo('assets/videos/missao.mp4')" type="button" role="tab" aria-controls="mission"
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
								<p class="headline" style="width: 70%;line-height: 1.4;">Unidos, somos agentes de transformação para promover a dignidade humana em seu
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
								<video id="vidQuem" class="video-player" :src="currentVideo" autoplay muted loop>
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