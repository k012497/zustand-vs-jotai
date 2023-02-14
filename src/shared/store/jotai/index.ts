import { atom } from 'jotai';
import { TodoItem } from '../../constants';

export const todoListAtom = atom<Array<TodoItem>>([]);
