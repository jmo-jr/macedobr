import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="home" class="home panel visible">

		<glyphs-component></glyphs-component>
		
			<div class="container">

				<div class="d-flex justify-content-around align-items-center h-100">
					<div class="headlines">
						<h2 class="main-title">
							<div class="enter-title">Associação<br>Macedo Brasil</div>
						</h2>
						<div class="banner-glyph"></div>
						<h3 class="subtitle">Unimos forças para transformar realidades</h3>
						<p class="headline">Dignidade humana, desenvolvimento social <br>e sustentabilidade.</p>
						<div class="wave-glyph"></div>
					</div>

					<div class="video-container">
						<div id="lazycontainer" class="video-frame">
							<img class="d-none placeholder-img" id="placeholder_image" src="assets/capas/home.jpg" fetchpriority="high" />
							<video class="dnone desktop" width="100%" height="100%" data-src="assets/videos/home.webm" poster="assets/capas/home.jpg"
								autoplay loop>
								<source src="assets/videos/home.webm" type="video/mp4">
								Your browser does not support the video tag.
							</video>
							<video class="dnone mobile" width="100%" height="100%" data-src="assets/videos/home1.webm" poster="assets/capas/home.jpg"
								autoplay loop>
								<source src="assets/videos/home1.webm" type="video/mp4">
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>

			</div>
		</section>
	`
}