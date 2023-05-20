import { setTimeout } from 'timers/promises';
import { prisma } from '$lib/server/prisma';

// export const db = {
// 	getBlogPostList: async (limit = 100, skip = 0, timeout = 0) => {
// 		const res = await fetch(`https://dummyjson.com/posts?limit${limit}&skip${skip}`);
// 		const postData = await res.json();
// 		await setTimeout(timeout);
// 		return postData.posts;
// 	},

// };

export const db = {
	getJavaScriptContext: async (timeout = 0) => {
		const allJsContext = await prisma.languages.findMany();
		return allJsContext;
	},
	getLandingPage: async (timeout = 0) => {
		const allJsContext = await prisma.landingpage.findMany();
		await setTimeout(timeout);
		return allJsContext;
	}
};
