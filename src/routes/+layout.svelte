<script>
	import '$lib/startcss/startcss.css';
	import Logo from '$components/Logo.svelte';
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
