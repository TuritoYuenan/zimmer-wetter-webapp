import type { PageServerLoad } from './$types';
import { XataClient } from '$lib/xata';

const client = new XataClient({
	apiKey: import.meta.env.VITE_XATA_API_KEY,
	branch: import.meta.env.VITE_XATA_BRANCH
});

export const load: PageServerLoad = async () => {
	const data = await client
		.db.weather_data
		.sort("xata.createdAt", "desc")
		.getFirst();

	// Blunder code 2: Electric boogaloo
	return {
		temperature: data?.temperature!,
		humidity: data?.humidity!,
		pressure: data?.pressure!,
		windSpeedAvg: data?.wind_speed_avg!,
		windSpeedMax: data?.wind_speed_max!,
		windDirection: data?.wind_direction!,
		rainfall_D: data?.rainfall_day!,
		rainfall_H: data?.rainfall_hour!,
		xata: data?.xata!
	};
}
