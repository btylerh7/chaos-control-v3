<script lang="ts">
	const pages: { href: string; title: string }[] = [
		{ href: "/", title: "Home" },
		{ href: "/songs", title: "Strudel Showcase" },
		{ href: "/collection", title: "Music Collection" }
	];
</script>

<nav>
	{#each pages as page}
		<a class="" href={page.href}>{page.title}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		height: fit-content;
		grid-area: nav;
		border: var(--box-border);
		justify-content: center;
		width: fit-content;
		@media (width > 500px) {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}

		& > a {
			text-decoration: none;
			color: var(--app-text-color) !important;
			padding: 1rem 2rem;
			@media (width > 550px) {
				max-width: 30ch;
			}

			&:visited {
				color: var(--app-text-color);
			}
			&:hover {
				text-decoration: underline;
				background-color: var(--accent-color);
				color: white !important;
				background-image: url("/black-arms-resized.png");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
		}
	}
</style>
