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
		justify-content: center;
		align-items: center;
		width: 100%;
		flex-direction: column;
		@media (width > 600px) {
			flex-direction: row;
			justify-content: flex-end;
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
