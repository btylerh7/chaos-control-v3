<script lang="ts">
	import Navbar from './Navbar.svelte';
</script>

<header>
	<div class="logo">
		<img src={'/ChaosEmeraldRed.png'} alt="A red chaos emerald graphic" />
		<div class="header-text">
			<p class="title">Chaos Control</p>
			<p class="tagline">Life is chaotic, write fun html instead</p>
		</div>
	</div>
	<Navbar />
</header>

<style>
	header {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		align-items: center;
		gap: 1rem;
	}
	.logo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
	}
	img {
		width: 100%;
		max-width: 100px;
	}
	.title {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}
	.tagline {
		font-size: 0.75rem;
	}
</style>
