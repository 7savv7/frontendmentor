import { create } from "zustand";

interface Todo {
  task: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (task: string, completed: boolean) => void;
  deleteTodo: (index: number) => void;
  clearCompleted: () => void;
  toggleCompleted: (index: number) => void;
}

const useTodo = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (task: string, completed: boolean) =>
    set((state) => ({
      todos:
        task.trim() !== ""
          ? [...state.todos, { task, completed }]
          : state.todos,
    })),
  deleteTodo: (index: number) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  clearCompleted: () =>
    set((state) => ({ todos: state.todos.filter((t) => !t.completed) })),
  toggleCompleted: (index: number) =>
    set((state) => ({
      todos: state.todos.map((t, i) =>
        i === index ? { ...t, completed: true } : t,
      ),
    })),
}));

export default useTodo;
