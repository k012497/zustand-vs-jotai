import { atom } from 'jotai';

export interface TodoItem {
  checked: boolean;
  todo: string;
}

export const todoListAtom = atom<Array<TodoItem>>([]);
