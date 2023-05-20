import type { LayoutServerLoad } from './$types';
import { db } from '$lib/database/db';

export const load = (async () => {
	return {
		article: db.getJavaScriptContext(0)
		// lazy: {
		// 	landing: db.getLandingPage(1)
		// }
	};
}) satisfies LayoutServerLoad;
