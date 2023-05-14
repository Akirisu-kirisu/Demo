import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
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
