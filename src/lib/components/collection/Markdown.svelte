<script lang="ts">
	import { marked } from "marked";
	const { text } = $props();
	const htmlText = marked(text);
</script>

<div>
	{@html htmlText}
</div>
