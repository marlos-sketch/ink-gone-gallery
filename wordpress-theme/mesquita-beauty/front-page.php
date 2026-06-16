<?php
/**
 * Página inicial (landing) — Mesquita Beauty Clinic
 * @package Mesquita_Beauty
 */
$c = mesquita_contact();
get_header(); ?>

<!-- HERO -->
<section class="hero">
	<div class="container">
		<h1><?php esc_html_e( 'Remoção de Tatuagem & Micropigmentação a Laser', 'mesquita-beauty' ); ?></h1>
		<p><?php esc_html_e( 'Tecnologia de ponta, técnica refinada e atendimento exclusivo no coração de Santana, São Paulo.', 'mesquita-beauty' ); ?></p>
		<a class="btn btn-primary" href="<?php echo esc_url( mesquita_whatsapp_url( 'Olá! Gostaria de mais informações.' ) ); ?>" target="_blank" rel="noopener">
			<?php esc_html_e( 'Agendar avaliação', 'mesquita-beauty' ); ?>
		</a>
	</div>
</section>

<!-- PROCEDIMENTOS -->
<section id="procedimentos">
	<div class="container">
		<h2 style="text-align:center;"><?php esc_html_e( 'Nossos Procedimentos', 'mesquita-beauty' ); ?></h2>
		<p style="text-align:center; max-width:620px; margin:0 auto 48px;">
			<?php esc_html_e( 'Especialistas em remoção a laser de tatuagens corporais e micropigmentação de sobrancelhas, lábios e linha dos olhos.', 'mesquita-beauty' ); ?>
		</p>
		<div class="grid">
			<div class="card">
				<h3><?php esc_html_e( 'Remoção de Tatuagem', 'mesquita-beauty' ); ?></h3>
				<p><?php esc_html_e( 'Laser Q-Switched de última geração que fragmenta o pigmento sem agredir a pele.', 'mesquita-beauty' ); ?></p>
			</div>
			<div class="card">
				<h3><?php esc_html_e( 'Remoção de Micropigmentação', 'mesquita-beauty' ); ?></h3>
				<p><?php esc_html_e( 'Tratamento seguro para corrigir sobrancelhas, lábios e delineadores indesejados.', 'mesquita-beauty' ); ?></p>
			</div>
			<div class="card">
				<h3><?php esc_html_e( 'Micropigmentação Premium', 'mesquita-beauty' ); ?></h3>
				<p><?php esc_html_e( 'Design personalizado de sobrancelhas com técnica fio a fio e nano blading.', 'mesquita-beauty' ); ?></p>
			</div>
		</div>
	</div>
</section>

<!-- DEPOIMENTOS -->
<section id="depoimentos" style="background:#f7f1e6;">
	<div class="container" style="text-align:center;">
		<h2><?php esc_html_e( 'Depoimentos', 'mesquita-beauty' ); ?></h2>
		<p><?php esc_html_e( 'Veja o que nossas clientes dizem no Google.', 'mesquita-beauty' ); ?></p>
		<a class="btn btn-outline" href="<?php echo esc_url( $c['maps_url'] ); ?>" target="_blank" rel="noopener">
			<?php esc_html_e( 'Ver avaliações no Google', 'mesquita-beauty' ); ?>
		</a>
	</div>
</section>

<!-- CONTATO -->
<section id="contato">
	<div class="container">
		<h2 style="text-align:center;"><?php esc_html_e( 'Contato & Localização', 'mesquita-beauty' ); ?></h2>
		<div class="grid" style="margin-top:40px;">
			<div class="card">
				<h3><?php esc_html_e( 'Fale conosco', 'mesquita-beauty' ); ?></h3>
				<p><strong>WhatsApp:</strong> <a href="<?php echo esc_url( mesquita_whatsapp_url() ); ?>" target="_blank" rel="noopener"><?php echo esc_html( $c['whatsapp_display'] ); ?></a></p>
				<p><strong>Instagram:</strong> <a href="<?php echo esc_url( $c['instagram'] ); ?>" target="_blank" rel="noopener">@srsramesquitabeautyclinic</a></p>
				<p><strong><?php esc_html_e( 'Endereço:', 'mesquita-beauty' ); ?></strong><br>
					<a href="<?php echo esc_url( $c['maps_url'] ); ?>" target="_blank" rel="noopener"><?php echo esc_html( $c['address'] ); ?></a>
				</p>
			</div>
			<div class="card" style="padding:0; overflow:hidden;">
				<iframe
					src="https://www.google.com/maps?q=<?php echo rawurlencode( $c['address'] ); ?>&output=embed"
					width="100%" height="100%" style="min-height:320px; border:0;"
					loading="lazy" referrerpolicy="no-referrer-when-downgrade"
					title="<?php esc_attr_e( 'Localização da clínica', 'mesquita-beauty' ); ?>">
				</iframe>
			</div>
		</div>
	</div>
</section>

<?php get_footer();
