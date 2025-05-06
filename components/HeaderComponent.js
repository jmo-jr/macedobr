export default {
	template: `
		<header class="default-header">
			<nav class="navbar navbar-expand-sm navbar-light bg-mbr">
				<div class="container">

					<!-- LOGO -->
					<a class="nav-link navbar-brand animate" href="/#">
						<img class="dt-logo animate" src="assets/logo_ambr_br.png" alt="Associação Macedo Brasil">
						<img class="mob-logo" src="assets/logo_ambr_cor.png" alt="Associação Macedo Brasil">
					</a>

					<div class="clickables">
					
						<!-- MENU -->
						<div class="collapse navbar-collapse justify-content-center" id="mainNav">
							<div class="navbar-nav animate">
								<router-link to="/sobre" class="nav-js nav-link" aria-current="page" data-panel="quem">Quem Somos</router-link>
								<router-link to="/parcerias" class="nav-js nav-link" aria-current="page" data-panel="parcerias">Parcerias</router-link>
								<router-link to="/atuacao" class="nav-js nav-link" aria-current="page" data-panel="atuacao">Atuação</router-link>
								<router-link to="/projetos" class="nav-js nav-link" aria-current="page" data-panel="projetos">Projetos</router-link>
								
								<div class="dropdown">
									<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" href="#"
										role="button">Transparência</a>

									<ul class="dropdown-menu">
										
										<li><router-link to="/transparencia" class="dropdown-item">Documentação</router-link></li>

										<li class="dropend">
											<button class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" type="button">Contratos</button>

											<ul class="dropdown-menu dropdown-submenu">
												<li><router-link to="/contratos/coruripe" class="dropdown-item">Coruripe/AL</router-link></li>
											</ul>
										</li>

										<li class="mobile-dropend">
											<button class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" type="button">Contratos</button>

											<ul class="dropdown-menu dropdown-submenu">
												<li><router-link to="/contratos/coruripe" class="dropdown-item">Coruripe/AL</router-link></li>
											</ul>
										</li>

									</ul>

								</div>
								<router-link to="/contato" class="nav-js nav-link" aria-current="page" data-panel="fale">Fale Conosco</router-link>
							</div>
						</div>

						<!-- BURGER -->
						<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
							aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="true">
							<span class="navbar-toggler-icon"></span>
						</button>

						<!-- SOCIAL -->
						<div class="top-social">
							<a href="https://www.instagram.com/associacao.macedobrasil" target="_blank" class="instagram animate">
								<i class="fa fa-instagram"
									aria-hidden="true"></i></a>
							<a href="https://www.facebook.com/profile.php?id=61555134284868" target="_blank" class="facebook animate">
								<i class="fa fa-facebook"
									aria-hidden="true"></i></a>
							<!-- <a href="https://wa.me/55759" target="_blank" class="whatsapp animate"><i class="fa fa-whatsapp" aria-hidden="true"></i></a> -->
						</div>
					</div>

				</div>
			</nav>

			<a id="home-link" class="back-btn nav-link nav-js" href="#home" data-panel="home">HOME</a>
		</header>
	`
};