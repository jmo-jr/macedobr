import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	data() {
		return {
			folders: [
				{
					id: 1,
					name: 'Termos de Colaboração',
					link: '#/contratos/coruripe/termos'
				},
				{
					id: 2,
					name: 'Funcionários',
					link: 'https://drive.google.com/file/d/1ZPq2qk461nlrWkK43Zr40yEmNJvPichQ/preview',
					target: '_blank'
				}
			]
		}
	},
	template: `
		<section class="transparencia">

				<h2 class="page-title">Contrato Coruripe/AL</h2>

				<div id="docsCoruripe" class="d-flex mt-5">

					<div v-for="folder in folders" :key="folder.id">
						<a :href="folder.link" :target="folder.target != undefined ? folder.target : '_self'">
							<div class="flex-centered folder-block">
								<span class="text-uppercase text-light">{{ folder.name }}</span>
							</div>
						</a>
					</div>
					
				</div>

      </section>
	`
}