<script lang="ts">
	const pages: { href: string; title: string }[] = [
		{ href: '/', title: 'Home' },
		{ href: '/songs', title: 'Strudel Showcase' }
	];
</script>

<nav>
	{#each pages as page}
		<a class="" href={page.href}>{page.title}</a>
	{/each}
</nav>

<style>
	nav {
		--auto-column-size: 250px;
		height: fit-content;
		justify-self: end;
		@media (width > 500px) {
			/* it does not wrap correctly without this */
			--auto-column-size: 100px;
			max-width: 75ch;
			justify-content: end;
		}

		& > a {
			text-decoration: none;
			color: var(--app-text-color) !important;
			padding: 1rem 2rem;

			&:visited {
				color: var(--app-text-color);
			}
			&:hover {
				text-decoration: underline;
				background-color: var(--accent-color);
				color: white !important;
				background-image: url('/black-arms-resized.png');
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}
		}
	}
</style>
