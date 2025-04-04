import GlyphsComponent from '../components/GlyphsComponent.js';

export default {
	components: {
		'glyphs-component': GlyphsComponent
	},
	template: `
		<section id="fale" class="fale panel visible">

		<glyphs-component></glyphs-component>

        <div class="img-container"></div>

        <div class="d-flex justify-content-end align-items-center h-100">
          <div class="form-container">

            <h2>Fale conosco</h2>

            <form action="" method="post">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-4">
                    <label for="nome" class="form-label">Nome:</label>
                    <input type="text" class="form-control" name="nome" id="nome">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-4">
                    <label for="email" class="form-label">E-mail:</label>
                    <input type="email" class="form-control" name="email" id="email">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-4">
                    <label for="mensagem" class="form-label">Mensagem:</label>
                    <textarea class="form-control" name="mensagem" id="mensagem" rows="4"></textarea>
                  </div>
                </div>
              </div>
              <div class="submit-container">
                <button type="submit" class="btn btn-light">Enviar</button>
              </div>
            </form>

            <div class="contacts">
              <div class="d-flex">
                <div class="contact">contato@macedobrasil.org.br <br> contato.al@macedobrasil.org.br</div>
              </div>
            </div>
          </div>
        </div>

      </section>
	`
}