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
	<section style="grid-area: tp">
		<h2>Temperature</h2>
		<p>{data.temperature} &deg;C</p>
	</section>
	<section style="grid-area: ht">
		<h2>Humidity</h2>
		<p>{data.humidity} %</p>
	</section>
	<section style="grid-area: ps">
		<h2>Barometric Pressure</h2>
		<p>{data.pressure} hPa</p>
	</section>
	<section style="grid-area: rn">
		<h2>Rainfall (1 Hour)</h2>
		<p>{data.rainfall_H} mm</p>
		<h2>Rainfall (1 Day)</h2>
		<p>{data.rainfall_D} mm</p>
	</section>
	<section style="grid-area: wd">
		<h2>Average Wind Speed</h2>
		<p>{data.windSpeedAvg} m/s</p>
		<h2>Maximum Wind Speed</h2>
		<p>{data.windSpeedMax} m/s</p>
		<h2>Wind Direction</h2>
		<p>{data.windDirection} degrees</p>
	</section>
</main>

<Footer />

<style>
	main {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "tp ht ps" "wd wd rn";
	}
</style>
