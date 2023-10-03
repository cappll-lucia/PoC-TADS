export type Todo = {
	id: number,
	description: string,
	done: boolean
};

const ourLittleDb = [] as Todo[];

const getNextId = () => {
	if (ourLittleDb.length === 0) return 1;
	return ourLittleDb[ourLittleDb.length - 1].id + 1;
}

export function addTodo(description: string) {
	const todo = {} as Todo;
	todo.description = description
	todo.id = getNextId();
	todo.done = false;
	ourLittleDb.push(todo);
}

export function getTodos() {
	return ourLittleDb;
}

export function editTodo(todo: Todo) {
	console.log('::::::::::: edit ', todo)
	ourLittleDb[todo.id - 1] = { ...todo }
}

export function deleteTodoById(id: number) {
	ourLittleDb.splice(id - 1, 1);
}