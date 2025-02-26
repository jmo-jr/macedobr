import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	data() {
		return {
			isPageLoading: true,
			currentVideo: "assets/videos/infraestrutura.mp4",
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
		<section id="atuacao" class="atuacao panel visible">

			<glyphs-component></glyphs-component>

			<!-- Tela de Loading -->
			<div v-if="isPageLoading" class="loading-screen">
				<div class="spinner"></div>
				<p>Carregando...</p>
			</div>

			<div v-if="!isPageLoading" class="container">

				<div class="d-flex justify-content-around">

					<div class="title-container">
						<h3 class="subtitle">
							<div>Atuação</div>
						</h3>
					</div>

					<div class="video-container">

						<div class="video-frame changes">
							<video 
								v-if="currentVideo" 
								id="vidAtua" 
								class="video-player" 
								:src="currentVideo" 
								autoplay muted loop
							>
								<source :src="currentVideo" type="video/mp4">
								Seu navegador não suporta vídeos.
							</video>
						</div>

					</div>

					<div class="headlines">

						<ul class="nav nav-tabs" id="atuacaoTabs" role="tablist">
							<li class="nav-item" role="presentation">
								<button class="nav-link active" id="infra-tab" data-bs-toggle="tab" data-bs-target="#infra"
									@click="changeVideo('assets/videos/infraestrutura.mp4')" type="button" role="tab" aria-controls="infra"
									aria-selected="true">Infraestrutura</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" @click="changeVideo('assets/videos/educacao.mp4')" type="button" role="tab" aria-controls="education"
									aria-selected="false">Educação</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="management-tab" data-bs-toggle="tab" data-bs-target="#management" @click="changeVideo('assets/videos/gestao.mp4')" type="button" role="tab" aria-controls="management"
									aria-selected="false">Gestão</button>
							</li>
							<li class="nav-item" role="presentation">
								<button class="nav-link" id="ti-tab" data-bs-toggle="tab" data-bs-target="#ti" @click="changeVideo('assets/videos/tecnologia.mp4')" type="button" role="tab" aria-controls="ti"
									aria-selected="false">Tecnologias</button>
							</li>
						</ul>

						<div class="tab-content" id="atuacaoTabContent">
							<div class="tab-pane fade show active" id="infra" role="tabpanel" aria-labelledby="infra-tab">
								<div class="banner-glyph"></div>
								<p class="headline">Atuamos com planejamento e desenvolvimento de projetos que abrangem infraestrutura e desenvolvimento urbano, engenharia civil, mobilidade urbana e acessibilidade. Nossa abordagem visa construir bases sólidas para comunidades, promovendo o crescimento sustentável e a qualidade de vida.</p>
							</div>
							<div class="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
								<div class="banner-glyph"></div>
								<p class="headline">Desenvolvemos programas integrados voltados para a modernização da educação e o acesso às novas tecnologias, abrangendo todas as faixas etárias. Nossa iniciativa visa proporcionar oportunidades educacionais inclusivas, capacitando indivíduos de todas as idades para enfrentar os desafios do mundo contemporâneo.</p>
							</div>
							<div class="tab-pane fade" id="management" role="tabpanel" aria-labelledby="management-tab">
								<div class="banner-glyph"></div>
								<p class="headline">Oferecemos apoio técnico para fortalecer a capacidade de gestão, por meio de um conjunto de ações voltadas para promover os direitos à transparência e ao controle social da gestão pública. Nosso compromisso é potencializar práticas eficientes de administração, promovendo uma gestão pública mais transparente, participativa e comprometida com o bem-estar da comunidade.</p>
							</div>
							<div class="tab-pane fade" id="ti" role="tabpanel" aria-labelledby="ti-tab">
								<div class="banner-glyph"></div>
								<div class="headline text-justify">
									<p>Desenvolvemos projetos integrando ações, metodologias e sistemas informatizados para maximizar a efetividade de suas operações e alcançar resultados significativos. Ao longo de nossa história, implementamos diversas soluções tecnológicas, incluindo:</p>
									<ul>
										<li>Sistema de Monitoramento, Controle e Avaliação;</li>
										<li>Sistema de Gestão de Contratos;</li>
										<li>Sistema de Gestão Arquivística.</li>
									</ul>
									<p>Essas iniciativas refletem nosso compromisso com a inovação e a aplicação prática da tecnologia para aprimorar nossas operações e impactar positivamente as comunidades servidas por nós.</p>
								</div>
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