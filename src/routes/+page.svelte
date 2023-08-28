<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	function lastSlider() {
		goto('#slide_5');
	}

	function animate() {
		const sections = document.querySelectorAll('section');
		const timming = {
			duration: 1000,
			iterations: 1,
			'animation-fill-mode': 'backwards'
		};

		sections.forEach((section) => {
			section.animate(
				{
					opacity: 0
				},
				timming
			);

			if (`#${section.id}` === location.hash) {
				section.animate(
					{
						opacity: 1
					},
					timming
				);
			}
		});
	}

	onMount(() => {
		animate();
		setInterval(animate, 100);
	});
</script>

<section id="slide_1" class="col fcenter full">
	<article class="col wfull">
		<h1>Somos <strong>One Day Design</strong> y nos dedicamos al diseño gráfico, web y video.</h1>

		<div class="row acenter">
			<a role="button" href="#slide_2">SIGUIENTE</a>
		</div>
	</article>
</section>

<section id="slide_2" class="col fcenter full">
	<article class="col wfull">
		<h1>
			Creemos que la <strong>calidad</strong> y la <strong>velocidad</strong> pueden ir de la mano.
		</h1>

		<div class="row acenter">
			<a role="button" href="#slide_3">SIGUIENTE</a>
		</div>
	</article>
</section>

<section id="slide_3" class="col fcenter full">
	<article class="col wfull">
		<h1>Puedes encontrar <strong>nuestros trabajos</strong> en instagram.</h1>

		<div class="row acenter">
			<a role="button" href="#slide_4">SIGUIENTE</a>
			<a role="button" href="https://www.instagram.com/vdeverdu" target="_blank">VER TRABAJOS</a>
		</div>
	</article>
</section>

<section id="slide_4" class="col fcenter full">
	<article class="col wfull">
		<h1>Contacta con nosotros enviandonos un <strong>whatsapp</strong>.</h1>

		<div class="row acenter">
			<a role="button" href="https://wa.me/34687754345" target="_blank" on:click={lastSlider}
				>ENVIAR WHATSAPP</a
			>
		</div>
	</article>
</section>

<section id="slide_5" class="col fcenter full">
	<article class="col wfull">
		<h1>Gracias por haver llegado hasta aqui, hablamos pronto.</h1>

		<div class="row acenter">
			<a role="button" href="#slide_1">VOLVER AL INICIO</a>
		</div>
	</article>
</section>

<style lang="postcss">
	section {
		padding: 4em;
		opacity: 0;

		&:first-of-type {
			opacity: 1;
		}
	}

	article {
		max-width: 800px;
		gap: 2em;

		& div {
			gap: 1em;
		}
	}

	h1 > strong {
		color: transparent;
		-webkit-text-stroke: 1px var(--base);
	}

	h1::selection {
		background-color: black;
	}

	a[role='button'] {
		min-width: 200px;
		pointer-events: all;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
