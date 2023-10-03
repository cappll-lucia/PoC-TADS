import { fail, redirect } from '@sveltejs/kit'
import { getTodos, editTodo } from '$lib/TodoService';
import type { Actions } from './$types';
import type { Todo } from '$lib/TodoService';

export const load = () => {
	const todos = getTodos();
	return {
		todos
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData)
		const todo = {} as Todo;
		const desc = formData.get('description')?.toString();
		if (!desc || desc.length === 0) {
			return fail(400, { description: { value: desc, missing: true } });
		}
		todo.id = parseInt(formData.get('id')?.toString() || '0');
		todo.description = desc;
		todo.done = formData.get('done') === 'on';
		editTodo(todo);
		throw redirect(302, '/list');
	}
}