import { db } from '$lib/database/db';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	return {
		article: db.getJavaScriptContext(0),
		lazy: {
			landing: db.getLandingPage(1)
		}
	};
};
