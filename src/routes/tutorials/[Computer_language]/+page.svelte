<script lang="ts">
	import { page } from '$app/stores';
	import Languages from '$lib/components/languages.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	console.log('🚀 ~ file: +page.svelte:5 ~ data:', $page);
</script>

<section class="introduction">
	<div class="wrapper-second-langs">
		{#each data.article as { img, title, alias }}
			<Languages {img} {title} {alias} />
		{/each}
	</div>
</section>
<ul>
	{#if data.posts !== undefined}
		{#each data.posts as context}
			<h1>{context.header_one}</h1>
		{/each}
	{/if}
</ul>
