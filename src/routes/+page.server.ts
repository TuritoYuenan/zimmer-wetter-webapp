import type { PageServerLoad } from './$types';
import { XataClient } from '$lib/xata';
import { lastMeasured } from '$lib/store';

function round(num: number) {
	return Math.round(num);
}

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load = (async () => {
	const data = await xata.db.weather_data
		.sort("xata.createdAt", "desc")
		.getFirst();

	lastMeasured.set(data!.xata.createdAt);

	return data;
}) satisfies PageServerLoad;
