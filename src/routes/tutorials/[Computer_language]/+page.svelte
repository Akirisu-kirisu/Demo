<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#if data.article !== undefined}
		{#each data.article as context}
			<h1>{context.header_one}</h1>
		{/each}
	{/if}
</ul>
