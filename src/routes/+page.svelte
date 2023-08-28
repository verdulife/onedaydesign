<script>
	import { onMount } from 'svelte';
	import { metadata as data } from '$lib/meta';

	import Meta from '$components/global/Meta.svelte';

	function animate() {
		const sections = document.querySelectorAll('section');
		const timming = { duration: 1000, delay: 200, fill: 'both' };

		sections.forEach((section) => {
			section.animate({ opacity: [0, 1] }, timming);
		});
	}

	function saveContact() {
		const contact = {
			name: 'One Day Design',
			phone: '687754345',
			email: 'hola@onedaydesign.com'
		};

		const vcard =
			'BEGIN:VCARD\nVERSION:4.0\nFN:' +
			contact.name +
			'\nTEL;TYPE=work,voice:' +
			contact.phone +
			'\nEMAIL:' +
			contact.email +
			'\nEND:VCARD';

		const blob = new Blob([vcard], { type: 'text/vcard' });
		const url = URL.createObjectURL(blob);

		const parent = document.querySelector('#slide_4 div');
		const link = document.createElement('a');
		link.download = contact.name + '.vcf';
		link.href = url;
		link.textContent = 'GUARDAR CONTACTO';
		link.role = 'button';
		link.style.pointerEvents = 'all';

		parent.appendChild(link);
	}

	onMount(() => {
		animate();
		saveContact();
	});
</script>

<Meta {data} />

<section id="slide_1" class="col fcenter full">
	<article class="col wfull">
		<h1 class="wfull">
			Hola, bienvenido a <strong>one&nbsp;day design</strong>, un estudio de diseño.
		</h1>

		<div class="row acenter wfull">
			<a role="button" href="#slide_2" on:click={animate}>SIGUIENTE</a>
		</div>
	</article>
</section>

<section id="slide_2" class="col fcenter full">
	<article class="col wfull">
		<h2 class="wfull">
			<strong>Nuestros servicios</strong> son,
			<br />
			diseño gráfico, páginas web, redes sociales, fotografía y edición video.
		</h2>

		<div class="row acenter wfull">
			<a role="button" href="#slide_3" on:click={animate}>SIGUIENTE</a>
		</div>
	</article>
</section>

<section id="slide_3" class="col fcenter full">
	<article class="col wfull">
		<h2 class="wfull">
			Puedes encontrar algunos de <strong>nuestros trabajos</strong> en
			<a href="https://www.instagram.com/onedaydesign" target="_blank" rel="no-referrer">
				Instagram
			</a>
			y en
			<a href="https://www.behance.com/onedaydesign" target="_blank" rel="no-referrer">
				Behance
			</a>.
		</h2>

		<div class="row acenter wfull">
			<a role="button" href="#slide_4" on:click={animate}>SIGUIENTE</a>
		</div>
	</article>
</section>

<section id="slide_4" class="col fcenter full">
	<article class="col wfull">
		<h2 class="wfull">
			Contacta con nosotros enviandonos un <strong>whatsapp</strong> al
			<strong>687&nbsp;754&nbsp;345</strong>.
		</h2>

		<div class="row acenter wfull">
			<a role="button" href="https://wa.me/34687754345" target="_blank">WHATSAPP</a>
		</div>
	</article>
</section>

<style lang="postcss">
	section {
		opacity: 0;
		padding: 2em;
	}

	article {
		max-width: 960px;
		gap: 2em;

		& div {
			gap: 1em;
		}
	}

	h1 > strong,
	h2 > strong {
		color: transparent;
		-webkit-text-stroke: 1px var(--base);

		@media (--light) {
			-webkit-text-stroke: 1px var(--base-900);
		}
	}

	a {
		color: currentColor;
		pointer-events: all;
	}

	a[role='button'] {
		width: 200px;
		max-width: 40%;
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
