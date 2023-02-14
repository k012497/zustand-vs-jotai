import { create } from 'zustand';
import { TodoItem } from '../../constants';

interface TodoState {
  todoList: Array<TodoItem>;
  addTodo: (todo: string) => void;
  checkTodo: (index: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoList: [],
  addTodo: (todo: string) =>
    set((state) => ({ todoList: [...state.todoList, { todo, checked: false }] })),
  checkTodo: (index: number) =>
    set((state) => {
      const newList = [...state.todoList];
      newList[index].checked = !newList[index].checked;
      return { todoList: [...newList] };
    }),
}));
