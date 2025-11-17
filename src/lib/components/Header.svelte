<script lang="ts">
	import Navbar from "./Navbar.svelte";
</script>

<header>
	<div class="logo">
		<img src={"/ChaosEmeraldRed.png"} alt="A red chaos emerald graphic" />
		<div class="header-text">
			<p class="title">Chaos Control</p>
			<p class="tagline">Life is chaotic, write fun html instead</p>
		</div>
	</div>
</header>

<style>
	header {
		display: grid;
		/* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
		align-items: "center";
		gap: 1rem;
		padding: 1rem;
		border: var(--box-border);
		grid-area: header;
	}
	.logo {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		text-align: center;
		@media (width > 550px) {
			text-align: left;
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}
		align-items: center;
		justify-content: center;
	}
	img {
		width: 100%;
		max-width: 169px;
		justify-self: center;
		@media (width > 550px) {
			justify-self: end;
		}
	}
	.title {
		font-size: 3rem;
		font-weight: bold;
		margin: 0;
	}
	.tagline {
		font-size: 1.25rem;
	}
</style>
