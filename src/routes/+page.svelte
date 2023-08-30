<script>
	import { onMount } from 'svelte';
	import { metadata as data } from '$lib/meta';
	import { Lang } from '$lib/stores';
	import { lang } from '$lib/lang';

	import Meta from '$components/global/Meta.svelte';
	import Whatsapp from '../lib/icons/Whatsapp.svelte';
	import Email from '../lib/icons/Email.svelte';

	const ui = lang[$Lang];

	function animate() {
		const sections = document.querySelectorAll('section');
		const timming = { duration: 1000, delay: 250, fill: 'both' };

		sections.forEach((section) => {
			section.animate({ opacity: [0, 1] }, timming);
		});
	}

	/* function saveContact() {
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
	} */

	onMount(() => {
		animate();
		/* saveContact(); */
	});
</script>

<Meta {data} />

{#if ui}
	<section id="presentacion" class="col fcenter full">
		<article class="col wfull">
			<h1 class="wfull">
				{ui.presentation.line1}
				<br />
				<strong>{ui.presentation.line2}</strong>{ui.presentation.line3}
			</h1>

			<div class="row acenter wfull">
				<a role="button" href="#servicios" on:click={animate}>{ui.buttons.next}</a>
			</div>
		</article>
	</section>

	<section id="servicios" class="col fcenter full">
		<article class="col wfull">
			<h2 class="wfull">
				<strong>{ui.services.line1}</strong>
				{ui.services.line2}
			</h2>

			<div class="row acenter wfull">
				<a role="button" href="#proyetos" on:click={animate}>{ui.buttons.next}</a>

				<a role="button" class="unset" href="#presentacion" on:click={animate}>
					{ui.buttons.prev}
				</a>
			</div>
		</article>
	</section>

	<section id="proyetos" class="col fcenter full">
		<article class="col wfull">
			<h2 class="wfull">
				{ui.projects.line1} <strong>{ui.projects.line2}</strong>{ui.projects.line3}
				<a href="https://www.instagram.com/onedaydesign.estudio" target="_blank" rel="no-referrer"
					>{ui.projects.line4}</a
				>.
			</h2>

			<div class="row acenter wfull">
				<a role="button" href="#contacto" on:click={animate}>{ui.buttons.next}</a>

				<a role="button" class="unset" href="#servicios" on:click={animate}>
					{ui.buttons.prev}
				</a>
			</div>
		</article>
	</section>

	<section id="contacto" class="col fcenter full">
		<article class="col wfull">
			<h2 class="wfull">
				{ui.contact.line1} <strong>{ui.contact.line2}</strong>
				{ui.contact.line3} <strong>{ui.contact.line4}</strong>.
			</h2>

			<div class="row wrap jcenter@sm acenter wfull">
				<a
					role="button"
					class="row fcenter wfull@sm"
					href="https://wa.me/34687754345"
					target="_blank"
				>
					<Whatsapp /> 661 100 652
				</a>

				<a
					role="button"
					class="row fcenter wfull@sm"
					href="mailto:onedaydesign.estudio@gmail.com"
					target="_blank"
				>
					<Email /> onedaydesign.estudio@gmail.com
				</a>

				<a role="button" class="unset" href="#proyetos" on:click={animate}>
					{ui.buttons.prev}
				</a>
			</div>
		</article>
	</section>
{/if}

<style lang="postcss">
	section {
		opacity: 0;
		padding: 2em;
	}

	article {
		max-width: 960px;
		gap: 2em;

		& div {
			gap: 2em;
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
		gap: 0.5em;
		pointer-events: all;

		&.unset {
			opacity: 0.8;
		}
	}
</style>
