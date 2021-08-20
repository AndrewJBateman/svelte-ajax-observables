<script>
	export let user;
</script>

<main>
  <p>Name: {$user.name}</p>
  <p>Bio: {$user.bio}</p>
  <p>Number of repos: {$user.public_repos}</p>
  <p>Updated: {$user.updated_at}</p>
</main>