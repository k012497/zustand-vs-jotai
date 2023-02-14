import React from 'react';
import { Typography } from 'antd';
import { useAtom } from 'jotai';

import Todo from '../todo/Todo';
import { todoListAtom } from '../../shared/store/jotai';

const { Title } = Typography;

export default function JotaiTodoContainer() {
  const [todoList, setTodoList] = useAtom(todoListAtom);

  const addTodo = (value: string) => {
    setTodoList([...todoList, { checked: false, todo: value }]);
  };

  const checkTodo = (index: number) => {
    const newTodos = [...todoList];
    newTodos[index].checked = !newTodos[index].checked;
    setTodoList(newTodos);
  };

  return (
    <div>
      <Title level={1}>✅ Jōtai</Title>
      <Todo list={todoList} onSubmit={addTodo} onCheck={checkTodo} />
    </div>
  );
}
