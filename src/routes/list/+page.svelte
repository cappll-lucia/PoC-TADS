<script lang="ts">
	import { enhance } from '$app/forms';
	import { get } from 'svelte/store';
	import type { PageData } from './$types';
	export let data: PageData;
	const { todos } = data;
</script>

<h2>List Todos</h2>
{#each todos as todo (todo.id)}
	<form class="edit-delete-form" method="post" use:enhance>
		<div class="todo-item">
			<div class="todo-item-line">
				<input name="id" hidden value={todo.id} />
				<input name="description" hidden value={todo.description} />
				<input
					type="checkbox"
					name="done"
					checked={todo.done}
					value={todo.done ? 'true' : 'false'}
					on:click={() => (todo.done = !todo.done)}
					class="checkbox"
				/>
				<label class={todo.done ? 'done' : 'no-dones'} for="description"> {todo.description}</label>
				<button type="submit" class="mini-btn btn-save">
					<i class="mi mi-cloud-upload" />
				</button>
			</div>
		</div>
	</form>
{/each}

<style>
	.edit-delete-form {
		width: 50%;
	}
	.todo-item {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.todo-item .todo-item-line {
		display: flex;
		height: 2rem;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}

	.mini-btn {
		height: 2rem;
		width: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.btn-save {
		background-color: #43a047;
		border: #43a047;
		margin: 0;
	}

	.todo-item .todo-item-line label {
		text-align: left;
		width: 22rem;
		height: 2rem;
	}
	.todo-item .todo-item-line .checkbox {
		text-align: left;
		width: 2rem;
		height: 2rem;
	}
	.todo-item .done {
		text-decoration: line-through;
	}

	@media (max-width: 950px) {
		.edit-delete-form {
			width: 70%;
		}
	}
	@media (max-width: 650px) {
		.edit-delete-form {
			width: 100%;
		}
	}
</style>
