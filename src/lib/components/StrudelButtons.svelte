<script lang="ts">
	import { onMount } from 'svelte';

	let { isHomepage } = $props();

	onMount(async () => {
		// @ts-ignore
		await import('@strudel/web');
		// @ts-ignore
		await initStrudel({
			// @ts-ignore
			prebake: () => samples('github:tidalcycles/dirt-samples')
		});
	});
	const editor = () => document.getElementById('repl');
	const play = () => {
		const repl = editor();
		console.log(repl);
		//@ts-ignore
		repl.editor.repl.evaluate(repl.code);
	};
	const stop = () => {
		const repl = editor();
		console.log(repl);
		//@ts-ignore
		repl.editor.repl.stop();
	};
</script>

<section class="control-wrapper">
	{#if isHomepage == true}
		<p>
			Would you like some classic Shadow the Hedgehog background music but written by me with code?
			Of course you do! (Look at the Strudel Showcase for more!)
		</p>
	{:else}
		<p>
			Click into the editor and press <code>Ctrl + Enter</code>
			to start and <code>Ctrl + .</code>
			to stop. Alternatively, use the buttons below.
		</p>
	{/if}
	<div class="audio-controls">
		<button class="shadow-button" onclick={play}>Play</button>
		<button class="shadow-button" onclick={stop}>Stop</button>
	</div>
</section>
