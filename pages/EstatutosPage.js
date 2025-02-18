import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	inject: ['docs'],
	template: `
		<section class="transparencia subpages">

			<glyphs-component></glyphs-component>

				<h2 class="page-title">Portal de Transparência</h2>

				<h3 style="margin: 32px 0">
					<a class="backbtn" href="#/transparencia">
						<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
					</a>
					<span>Estatutos</span>
				</h3>

				<div class="mt-5">
					
					<div class="collapse show">
						<div class="collapse-body">
							<!-- Nenhuma certidão foi disponibilizada ainda. -->
							<ul class="simple-list">
								<li v-for="item in docs.estatuto" :key="item.id">
									<a v-if="item.link != '#'" :href="item.link" target="_blank">
										<img src="assets/icon-file.svg" class="list-icon">{{ item.name }}
									</a>
									<span v-else>{{ item.name }}</span>
								</li>
							</ul>
						</div>
					</div>

				</div>

			</section>
	`
}