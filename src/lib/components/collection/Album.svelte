<script lang="ts">
	import { asset } from "$app/paths";
	const { title, artist, cover, releaseDate, urlPath } = $props();
	const coverSrc = asset(`/albums/${artist}/${cover}`);
</script>

<a class="collection-link" href={`/collection/${urlPath}`}>
	<article class="album" {title}>
		<div class="cd-wrapper">
			<div class="cd-cover">
				<img class="album-cover" alt={`${title} by ${artist} album cover`} src={coverSrc} />
			</div>
			<div class="cd-case"></div>
		</div>
		<div>
			<h2>{title}</h2>
			<p>{artist} - {releaseDate}</p>
		</div>
	</article>
</a>

<style>
	.collection-link {
		justify-self: center;
		color: white;
		&:visited {
			color: white;
		}
		& > * {
			text-align: center;
		}
		& .cd-wrapper {
			margin-inline: auto;
		}
	}
	.album {
		display: grid;
		justify-content: start;
		gap: 0;
		/* width: fit-content; */
		padding: 1rem;
		/* border-radius: 5px; */
		border: 1px solid var(--text);
		position: relative;

		& div > * {
			margin: 0;
		}
	}
	.cd-wrapper {
		position: relative;
		width: 250px;
		aspect-ratio: 1/1;
		perspective: 1000px;
		margin-block: 2em;

		&:hover {
			& .cd-case {
				display: none;
				border: none;
			}

			& .cd-cover {
				transform: rotateY(0deg);

				&::before,
				&::after {
					display: none;
				}
			}
		}
	}

	.cd-case {
		border-left: 2px solid var(--app-text-color);
		position: absolute;
		inset: 0;
		/* transform-style: flat; */
		/* perspective: 1000px; */
		transform: translateX(-10px) rotateY(45deg);
		z-index: -1;
		/* transform: rotateY(-110deg); */
	}

	.cd-cover {
		position: absolute;
		inset: 0;
		border: 2px solid var(--app-text-color);
		background: var(--app-background);
		transform: rotateY(45deg);
		z-index: 2;

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 15px;
			height: 2px;
			z-index: 10;
			background: var(--app-text-color);
		}

		&::before {
			top: -2px;
			left: -15px;
		}

		&::after {
			bottom: -2px;
			left: -15px;
		}

		& img {
			width: 100%;
			object-fit: cover;
			margin-bottom: 1em;
		}
	}
</style>
