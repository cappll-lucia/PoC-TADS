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
		const todo = {
			id: parseInt(formData.get('id')?.toString() || '0'),
			description: formData.get('description')?.toString() || '',
			done: formData.get('done') ? true : false
		} as Todo;
		editTodo(todo);
		throw redirect(302, '/list');
	}
}