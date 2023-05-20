<script lang="ts">
	export let title: string | null, img: string | null, alias: string | null;
</script>

<a href="#/" class="lang">
	<img width="49px" height="49px" src="/images/svg/navbar/{img}.svg" alt="" />
	<h5 class="m-0">{alias}</h5>
	<p class="m-0">{title}</p>
</a>
