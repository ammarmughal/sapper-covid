<script context="module">
  import requests from "../components/Data/requests.js";

  export async function preload() {
    try {
      const usStats = await requests.usStats;

      return { usStats };
    } catch (e) {}
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import TableContainer from "../components/TableContainer.svelte";

  export let usStats;
</script>

<style>
  :global(h1) {
    font-size: 2.3em;
    margin: 0;
  }
</style>

<svelte:head>
  <title>Covid 19 Tracker</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid 19</h1>
  </div>
</div>

<CovidStat />
<CovidChart />
<TableContainer />
