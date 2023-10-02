import { getTodos } from '$lib/TodoService';

export const load = () => {
	const todos = getTodos();
	return {
		todos
	};
};
