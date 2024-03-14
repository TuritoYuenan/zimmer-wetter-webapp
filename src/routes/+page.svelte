<script lang="ts">
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	import "../app.css";
	export let data;
</script>

<svelte:head>
	<title>ZimmerWetter</title>
</svelte:head>

<Header />

<main class="grid">
	<section style="grid-area: ds;">
		<h2>Description</h2>
		<p>Lorem, ipsum dolor.</p>
	</section>
	<section style="grid-area: tp">
		<h2><img src="/icons/tempture.svg" width=28 height=28 alt="">Temperature</h2>
		<p>{data.temperature} &deg;C</p>
	</section>
	<section style="grid-area: ht">
		<h2><img src="/icons/humidity.svg" width=28 height=28 alt="">Humidity</h2>
		<p>{data.humidity} %</p>
	</section>
	<section style="grid-area: ps">
		<h2><img src="/icons/pressure.svg" width=28 height=28 alt="">Barometric Pressure</h2>
		<p>{data.pressure} hPa</p>
	</section>
	<section style="grid-area: rn">
		<h2><img src="/icons/rainfall.svg" width=28 height=28 alt="">Rainfall (1 Hour)</h2>
		<p>{data.rainfall_H} mm</p>
		<h2><img src="/icons/rainfall.svg" width=28 height=28 alt="">Rainfall (1 Day)</h2>
		<p>{data.rainfall_D} mm</p>
	</section>
	<section style="grid-area: wd">
		<h2><img src="/icons/wind-spd.svg" width=28 height=28 alt="">Average Wind Speed</h2>
		<p>{data.windSpeedAvg} m/s</p>
		<h2><img src="/icons/wind-spd.svg" width=28 height=28 alt="">Maximum Wind Speed</h2>
		<p>{data.windSpeedMax} m/s</p>
		<h2><img src="/icons/wind-dir.svg" width=28 height=28 alt="">Wind Direction</h2>
		<p>{data.windDirection} degrees</p>
	</section>
</main>

<Footer />

<style>
	main {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "ds rn wd" "tp ht ps";
	}

	section h2 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
