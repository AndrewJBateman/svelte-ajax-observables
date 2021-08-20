<script context="module">
  import { reposObservable, user } from './stores/datastore';
  import UserCard from './components/userCard.svelte';
</script>

<svelte:head>
	<title>Main Page</title>
</svelte:head>

<main>
  <h3>Gihub User Infomation</h3>
  <UserCard {user} />
  <br />
  <h3>List of repos with links that contain 'angular'</h3>
  {#each $reposObservable as r}
    <div>
      <a href="{r.url}">{r.name}</a>
    </div>
  {/each}
</main>

<style>

</style>