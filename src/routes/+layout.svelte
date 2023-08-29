<script>
	import '$lib/startcss/startcss.css';
	import Logo from '$components/Logo.svelte';
	import { Lang } from '$lib/stores';
	import { beforeUpdate } from 'svelte';

	beforeUpdate(() => {
		if (navigator.language.includes('es')) $Lang = 'es';
		if (navigator.language.includes('ca')) $Lang = 'ca';
	});
</script>

<header>
	<Logo />
</header>

<main class="scrollbar snap">
	<slot />
</main>

<style lang="postcss">
	main {
		pointer-events: none;
		scroll-behavior: auto;
		background: radial-gradient(circle at top left, #00ffff30, transparent),
			radial-gradient(circle at top right, #ff00ff20, transparent),
			radial-gradient(circle at bottom, #ffff0020, transparent);

		@media (--light) {
			background: radial-gradient(circle at top left, #00ffff40, transparent),
				radial-gradient(circle at top right, #ff00ff30, transparent),
				radial-gradient(circle at bottom, #ffff0030, transparent);
		}
	}
</style>
