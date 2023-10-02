<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { todos } = data;
</script>

<h2>List Todos</h2>

<ul>
	{#each todos as todo}
		<li>{todo.description}</li>
	{/each}
</ul>
