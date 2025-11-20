<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="main-container">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
	main {
		grid-area: main;
		border: var(--box-border);
		padding-inline: 1em;
	}
	:global {
		:root {
			--app-background: #fafafa;
			--app-text-color: black;

			/* shadow the hedgehog red */
			--accent-color: rgb(220, 0, 0);

			--link-color: var(--accent-color);
			--border-radius: 0.5rem;
			--auto-column-size: 250px;
			--box-border: 2px solid var(--app-text-color);
		}

		*,
		*::before,
		*::after {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}

		body {
			background-color: var(--app-background);
			color: var(--app-text-color);
			max-width: 1150px;
			padding: 2em;
			margin: auto;
		}

		h1,
		h2 {
			margin-block: 0.5em;
		}

		a {
			color: var(--app-text-color);

			&:not(.collection-link),
			&:not(.navlink) {
				color: var(--link-color);
			}

			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}

			&:visited {
				&:has(.collection-link),
				&:has(.navlink) {
					color: var(--app-text-color);
				}
				color: var(--link-color);
			}
		}

		p {
			font-size: 1.15em;
			margin-bottom: 0.75em;
		}

		i {
			font-weight: bold;
		}
		section {
			margin-block: 3em;
		}
		.shadow-button {
			padding-inline: 1rem;
			padding-block: 0.5rem;
			color: white;
			background: var(--accent-color);
			border: none;
			border-radius: var(--border-radius);

			&:hover {
				cursor: pointer;
				background-image: url("/black-arms-resized.png");
				background-size: cover;
			}
		}
		.container {
			margin-block: 3em;
			display: grid;
			@media (width > 500px) {
				grid-template-columns: repeat(3, 1fr);
				gap: 1rem;
			}
		}
		.box-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(var(--auto-column-size), 1fr));
			gap: 1em;
		}
		@media (prefers-color-scheme: dark) {
			:root {
				--app-background: black;
				--app-text-color: white;
			}
		}
	}
</style>
