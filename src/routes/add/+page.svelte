<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
</script>

<h2>Add Todo</h2>

<form method="post" class="add-from" use:enhance>
	<input name="description" type="text" />
	{#if form?.description.missing}
		<span>missing description</span>
	{/if}
	<button type="submit" class="save-btn"><i class="mi mi-add" /></button>
</form>

<style>
	.add-from {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		width: 50%;
	}

	.add-from .save-btn {
		width: 2rem;
		margin-left: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 950px) {
		.add-from {
			width: 70%;
		}
	}
	@media (max-width: 650px) {
		.add-from {
			width: 100%;
		}
	}
</style>
