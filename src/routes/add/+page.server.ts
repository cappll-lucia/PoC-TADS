import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { addTodo } from '$lib/TodoService';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const description = formData.get('description')?.toString();
		if (!description || description.length === 0) {
			return fail(400, { description: { value: description, missing: true } });
		}
		addTodo(description);
		throw redirect(302, '/list');
	}
} satisfies Actions;
