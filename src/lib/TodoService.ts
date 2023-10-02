type Todo = { description: string };

const ourLittleDb = [] as Todo[];
export function addTodo(todo: Todo) {
	ourLittleDb.push(todo);
}

export function getTodos() {
	return ourLittleDb;
}
