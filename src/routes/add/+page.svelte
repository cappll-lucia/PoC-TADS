<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h2>Add Todo</h2>

<form method="post">
	<input name="description" type="text" />
	{#if form?.description.missing}
		<span>missing description</span>
	{/if}
	<button type="submit">Add</button>
</form>
