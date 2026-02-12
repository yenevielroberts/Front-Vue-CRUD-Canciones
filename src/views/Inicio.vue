<template>
	<main class="landing">

		<section class="hero">
			<div class="hero-copy">
				<p class="eyebrow">Streaming local y rapido</p>
				<h1>Tu musica, tus listas, tu ritmo diario</h1>
				<p class="lead">
					Crea, guarda y comparte listas con un flujo simple. Gestiona tu
					catalogo con un panel limpio y potente.
				</p>
				<div class="hero-actions">
					<RouterLink class="btn btn-primary" to="/login">Entrar ahora</RouterLink>
					<a class="btn btn-outline" href="#coleccion">Ver coleccion</a>
				</div>
				<div class="hero-meta">
					<div>
						<strong>120K+</strong>
						<span>Canciones activas</span>
					</div>
					<div>
						<strong>4.9</strong>
						<span>Promedio de valoracion</span>
					</div>
					<div>
						<strong>24/7</strong>
						<span>Soporte continuo</span>
					</div>
				</div>
			</div>
			<div class="hero-visual">
				<div class="vinyl"></div>
				<div class="card">
					<p class="card-title">Lista destacada</p>
					<p class="card-track">Noche Tropical</p>
					<div class="bar">
						<span></span><span></span><span></span><span></span>
					</div>
					<p class="card-sub">24 canciones • 1h 18m</p>
				</div>
			</div>
		</section>

		<section id="features" class="features">
			<div class="section-title">
				<h2>Funciones que aceleran tu flujo</h2>
				<p>Todo lo esencial para administrar tu musica sin friccion.</p>
			</div>
			<div class="feature-grid">
				<article>
					<h3>Busqueda instantanea</h3>
					<p>Encuentra canciones por artista, genero o estado en segundos.</p>
				</article>
				<article>
					<h3>CRUD limpio</h3>
					<p>Agrega, edita y elimina pistas con formularios ligeros.</p>
				</article>
				<article>
					<h3>Listas inteligentes</h3>
					<p>Organiza por momento, energia y favoritos en un solo panel.</p>
				</article>
			</div>
		</section>

		<section id="coleccion" class="collection">
			<div>
				<h2>Una coleccion que se siente viva</h2>
				<p>
					Crea listas con portadas personalizadas, resena canciones y gestiona
					permisos en equipo.
				</p>
				<RouterLink class="btn btn-primary" to="/login">Iniciar sesion</RouterLink>
			</div>
			<div class="stack">
				<div class="stack-card">
					<span>Wave Sessions</span>
					<small>12 pistas</small>
				</div>
				<div class="stack-card">
					<span>Costa Azul</span>
					<small>18 pistas</small>
				</div>
				<div class="stack-card">
					<span>Deep Work</span>
					<small>31 pistas</small>
				</div>
			</div>
		</section>

		<section class="cta">
			<div>
				<h2>Listo para organizar tu musica</h2>
				<p>Inicia sesion y comienza a construir tu catalogo en minutos.</p>
			</div>
			<RouterLink class="btn btn-ghost" to="/login">Iniciar sesion</RouterLink>
		</section>

		<footer class="footer">
			<p>RitmoLocal 2026. Hecho para equipos creativos.</p>
		</footer>
	</main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Grotesk:wght@300;400;500;600&display=swap");

:global(body) {
	margin: 0;
	background: #0c0f14;
	color: #f7f4ef;
}

.landing {
	min-height: 100vh;
	padding: 32px clamp(20px, 6vw, 80px) 64px;
	font-family: "Space Grotesk", sans-serif;
	background:
		radial-gradient(circle at 10% 20%, #2c1a12 0%, transparent 45%),
		radial-gradient(circle at 80% 0%, #1a2c2b 0%, transparent 50%),
		linear-gradient(135deg, #0c0f14 0%, #11171f 60%, #0c0f14 100%);
}

.hero {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 40px;
	margin-top: 64px;
	align-items: center;
}

.hero-copy h1 {
	font-family: "DM Serif Display", serif;
	font-size: clamp(40px, 6vw, 72px);
	line-height: 1.05;
	margin: 12px 0 16px;
}

.eyebrow {
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 2px;
	color: #e0b36a;
}

.lead {
	font-size: 18px;
	max-width: 520px;
	color: rgba(247, 244, 239, 0.8);
}

.hero-actions {
	display: flex;
	gap: 16px;
	margin: 24px 0 32px;
	flex-wrap: wrap;
}

.hero-meta {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	gap: 16px;
	font-size: 14px;
}

.hero-meta strong {
	display: block;
	font-size: 20px;
}

.hero-visual {
	position: relative;
	display: grid;
	place-items: center;
	min-height: 360px;
}

.vinyl {
	width: 260px;
	height: 260px;
	border-radius: 50%;
	background:
		radial-gradient(circle at center, #0c0f14 0 26%, #1b1f27 27% 45%, #0c0f14 46% 60%, #222733 61% 70%, #0c0f14 71% 100%);
	box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
	animation: spin 18s linear infinite;
}

.card {
	position: absolute;
	right: -10px;
	bottom: -20px;
	padding: 18px 20px;
	border-radius: 18px;
	background: rgba(22, 26, 34, 0.8);
	border: 1px solid rgba(224, 179, 106, 0.3);
	width: 220px;
	backdrop-filter: blur(8px);
}

.card-title {
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: #e0b36a;
	margin: 0 0 8px;
}

.card-track {
	font-size: 18px;
	margin: 0 0 8px;
}

.card-sub {
	font-size: 12px;
	color: rgba(247, 244, 239, 0.7);
}

.bar {
	display: flex;
	gap: 4px;
	margin: 12px 0;
}

.bar span {
	width: 6px;
	height: 22px;
	border-radius: 6px;
	background: #e0b36a;
	animation: bounce 1.6s ease-in-out infinite;
}

.bar span:nth-child(2) { animation-delay: 0.2s; }
.bar span:nth-child(3) { animation-delay: 0.4s; }
.bar span:nth-child(4) { animation-delay: 0.6s; }

.features{
	margin-top: 96px;
}

.section-title h2 {
	font-family: "DM Serif Display", serif;
	font-size: clamp(28px, 4vw, 44px);
	margin-bottom: 12px;
}

.section-title p {
	color: rgba(247, 244, 239, 0.7);
}

.feature-grid{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 20px;
	margin-top: 32px;
}

.feature-grid article {
	padding: 24px;
	border-radius: 20px;
	background: rgba(17, 20, 26, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.08);
}

.collection {
	margin-top: 96px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 30px;
	align-items: center;
	padding: 40px;
	border-radius: 28px;
	background: linear-gradient(120deg, rgba(224, 179, 106, 0.12), rgba(21, 29, 37, 0.9));
	border: 1px solid rgba(224, 179, 106, 0.25);
}

.stack {
	display: grid;
	gap: 12px;
}

.stack-card {
	padding: 18px;
	border-radius: 16px;
	background: rgba(10, 14, 19, 0.9);
	border: 1px solid rgba(255, 255, 255, 0.08);
	display: flex;
	justify-content: space-between;
}

.highlight {
	border-color: rgba(224, 179, 106, 0.5);
	box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.cta {
	margin-top: 96px;
	padding: 36px 40px;
	border-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	background: linear-gradient(120deg, #e0b36a 0%, #d86b4a 60%, #9e3d2a 100%);
	color: #111217;
}

.footer {
	margin-top: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	font-size: 14px;
	color: rgba(247, 244, 239, 0.6);
}

.footer a {
	color: #e0b36a;
	text-decoration: none;
}

.btn {
	padding: 12px 20px;
	border-radius: 999px;
	text-decoration: none;
	font-size: 14px;
	letter-spacing: 0.5px;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	border: 1px solid transparent;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
	transform: translateY(-2px);
}

.btn-primary {
	background: #e0b36a;
	color: #111217;
	box-shadow: 0 16px 30px rgba(224, 179, 106, 0.4);
}

.btn-outline {
	border-color: rgba(247, 244, 239, 0.4);
	color: #f7f4ef;
}

.btn-ghost {
	border-color: rgba(224, 179, 106, 0.6);
	color: #e0b36a;
}

@keyframes spin {
	to { transform: rotate(360deg); }
}

@keyframes bounce {
	0%, 100% { transform: translateY(0); opacity: 0.6; }
	50% { transform: translateY(-8px); opacity: 1; }
}

@media (max-width: 860px) {
	.nav-links {
		display: none;
	}

	.cta {
		flex-direction: column;
		text-align: center;
	}

	.card {
		position: static;
		margin-top: 20px;
	}
}

@media (max-width: 600px) {
	.hero-actions {
		flex-direction: column;
		align-items: stretch;
	}

	.btn {
		justify-content: center;
	}
}
</style>
