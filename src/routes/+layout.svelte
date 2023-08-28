<script>
	import '$lib/startcss/startcss.css';
</script>

<main class="scrollbar snap">
	<slot />
</main>

<style lang="postcss">
	main {
		pointer-events: none;
		scroll-behavior: auto;
	}
</style>
