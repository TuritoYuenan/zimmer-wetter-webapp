import type { PageServerLoad } from './$types';

import { XataClient } from '../xata';

function round(num: number) {
	return Math.round(num);
}

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load: PageServerLoad = async () => {
	const posts = await xata.db.weather_data.getFirst();

	return {...posts};
};
