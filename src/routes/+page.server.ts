import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	const getJavaScriptContext = async () => {
		const allJsContext = await prisma.languages.findMany();
		return allJsContext;
	};

	return {
		article: getJavaScriptContext()
	};
};
