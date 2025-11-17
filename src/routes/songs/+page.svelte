<script lang="ts">
	const songs = [
		{ title: 'A Little Roll Never Hurt Anyone', href: 'a-little-roll' },
		{ title: 'Golden (Originally by HUNTR/X)', href: 'golden' },
		{ title: 'Good Luck Babe (Originally by Chappel Roan)', href: 'good-luck-babe' },
		{ title: 'Nighttime Chug', href: 'nighttime-chug' },
		{ title: 'Rainy Afternoon Serenade', href: 'rainy-afternoon-serenade' },
		{ title: 'Synthetic Motor Oil', href: 'synthetic-motor-oil' },
		{ title: 'Vengeance is Mine', href: 'vengeance-is-mine' }
	];
</script>

<h1>Strudel Showcase Library</h1>
<div class="box-grid songs-wrapper">
	<section class="strudel-desc">
		<h2>music + code = my match made in heaven</h2>
		<p>
			In the summer of 2025, I was casually watching some programming streams at work. I mean, you
			might think that's a bad idea at work, but for me it helps. Both as a way to keep focused on
			my work and also as a way to relieve the inevitable boredom that happens in an office job.
		</p>

		<p>
			I am watching a stream by The Primeagen, and I notice for a split second that he is playing
			this music thing. <i>But wait</i>, I think. <i>Is that JavaScript?</i>
		</p>

		<p>
			Strudel is a part of a larger movement of "live-coding music" that has existed for decades in
			some shape or form. Many musicians will use a tool like this to perform live with simply a
			computer and a live REPL (or Read Eval Print Loop) that allows them to modify the code live
			and make the music change. The term "algorave" has affectionately been used to describe this
			type of performance, and I think it is beautiful and has a certain charm to it.
		</p>

		<p>
			I am a programmer with a background in music: music education, composition, production, and
			performance. So naturally, this is a match made in heaven. Here you will find some pieces that
			I have created myself as I learn how to use Strudel. It helps for me that it is in JavaScript,
			as that is what I spend most of my work time in. It is based off of Tidal Cycles, which is
			written in Haskell. One of these days I will figure out Haskell. Today is not that day.
		</p>
	</section>

	<section class="songlinks">
		{#each songs as song}
			<a href={`/songs/${song.href}`} title={song.title}>{song.title}</a>
		{/each}
	</section>
</div>

<style>
	.songlinks {
		display: grid;
		gap: 1rem;
		padding: 1em;
		border: 2px solid var(--app-text-color);
		height: fit-content;
	}
</style>
