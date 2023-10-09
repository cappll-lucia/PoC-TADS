<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.url.pathname);
</script>

<nav>
	<ul>
		<li><a href="/" class="no-link"><strong>SvelteKit | Proof of Concept<strong /></strong></a></li>
	</ul>
	<ul>
		<li>
			<a href="/add" class={$page.url.pathname == '/add' ? 'active' : 'inactive'}>Add Task</a>
		</li>
		<li>
			<a href="/list" class={$page.url.pathname == '/list' ? 'active' : 'inactive'}>Task List</a>
		</li>
	</ul>
</nav>
<hr />

<style>
	.active {
		background-color: hsl(195, 85%, 41%);
		color: blanchedalmond;
	}
</style>
