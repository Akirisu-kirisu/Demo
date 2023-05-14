import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'edge'
};
export const load: PageServerLoad = async ({ params, url }) => {
	console.log(params.Computer_language);

	if (params.Computer_language === 'javascript') {
		const getJavaScriptContext = async () => {
			const allJsContext = await prisma.javascript_context.findMany();
			return allJsContext;
		};

		return {
			article: getJavaScriptContext()
		};
	}
};
