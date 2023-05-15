<script lang="ts">
	import type { Config } from '@sveltejs/adapter-vercel';

	export const config: Config = {
		runtime: 'nodejs18.x'
	};
</script>

<slot><!-- optional fallback --></slot>
