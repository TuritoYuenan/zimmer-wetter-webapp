<script>
	import { lastMeasured } from "$lib/store";
</script>

<footer>
	<p>
		&COPY; 2024 N.T. Minh Triet &lt;<a
			href="mailto:104993913@student.swin.edu.au"
			>104993913@student.swin.edu.au</a
		>&gt;
	</p>
	<p>
		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/TuritoYuenan/zimmer-wetter-webapp">Github</a
		>
		| Ho Chi Minh city, Vietnam | Data last measured at {$lastMeasured.toLocaleString()}
	</p>
</footer>

<style>
	p {
		margin-block: 0.2rem 0.4rem;
	}
</style>
