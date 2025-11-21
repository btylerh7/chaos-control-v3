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
	<Navbar />
</header>

<style>
	/* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
	header {
		display: grid;
		grid-template-columns: 1fr;
		@media (width > 700px) {
			grid-template-columns: 1fr 1fr;
		}
		align-items: center;
		padding: 1rem;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		@media (width > 375px) {
			flex-direction: row;
			text-align: left;
		}
		@media (width > 700px) {
			justify-content: flex-start;
		}
		gap: 1rem;
	}
	img {
		width: 100%;
		max-width: 100px;
	}
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
	}
	.tagline {
		font-size: 0.8rem;
	}
</style>
