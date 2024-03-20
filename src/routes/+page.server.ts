import type { PageServerLoad } from './$types';
import { XataClient } from '../xata';

const xata = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load: PageServerLoad = async () => {
	const data = await xata.db.weather_data
		.sort("xata.createdAt", "desc")
		.getFirst();

	return data;
}
