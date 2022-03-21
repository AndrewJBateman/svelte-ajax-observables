<script>
	export let user;
</script>

<main>
  <p>Full Name: {$user.name}</p>
  <p>Bio: {$user.bio}</p>
  <p>No. of repos: {$user.public_repos}</p>
  <p>Updated: {$user.updated_at}</p>
</main>