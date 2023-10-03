<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
	const { todos } = data;

	interface TodoVisibility {
		[id: number]: boolean;
	}

	const todoVisibility: TodoVisibility = {};
	todos.forEach((todo) => {
		console.log(todo);
		todoVisibility[todo.id] = false;
	});
</script>

<h2>List Todos</h2>

<form class="edit-delete-form" method="post">
	{#each todos as todo}
		<div class="todo-item">
			<div class="todo-item-line">
				<input name="id" value={todo.id} />
				<input
					type="checkbox"
					name="done"
					checked={todo.done}
					value={todo.done}
					on:click={() => (todo.done = !todo.done)}
				/>
				<label class={todo.done ? 'done' : 'no-dones'} for="description"> {todo.description}</label>
				<button
					type="button"
					class={!todoVisibility[todo.id] ? 'mini-btn btn-edit' : 'mini-btn btn-close'}
					on:click={() => (todoVisibility[todo.id] = !todoVisibility[todo.id])}
				>
					<i class={!todoVisibility[todo.id] ? 'mi mi-add' : 'mi mi-close'} />
				</button>
				<button type="button" class="mini-btn btn-delete">
					<i class="mi mi-delete" />
				</button>
			</div>
			{#if todoVisibility[todo.id]}
				<div class="todo-item-edition">
					<input name="description" value={todo.description} />
					<button type="submit" class="mini-btn btn-save">
						<i class="mi mi-cloud-upload" />
					</button>
				</div>
			{/if}
		</div>
	{/each}
</form>

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
	.todo-item .todo-item-edition {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
	.todo-item .todo-item-edition input {
		height: 2rem;
		margin-right: 1rem;
	}
	.mini-btn {
		height: 1rem;
		width: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	.btn-close,
	.btn-delete {
		background-color: transparent;
		border: none;
		color: #e53935;
	}
	.btn-edit {
		background-color: transparent;
		border: none;
		color: #1e88e5;
	}
	.btn-save {
		background-color: #43a047;
		border: #43a047;
	}
	.todo-item .todo-item-line label {
		text-align: left;
		width: 22rem;
	}
	.todo-item .done {
		text-decoration: line-through;
	}
</style>
