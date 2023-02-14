import React from 'react';
import { Typography } from 'antd';

import Todo from '../todo/Todo';
import { useTodoStore } from '../../shared/store/zustand';

const { Title } = Typography;

export default function ZustandTodoContainer() {
  const { todoList, addTodo, checkTodo } = useTodoStore();

  const onSubmit = (value: string) => {
    addTodo(value);
  };

  return (
    <div>
      <Title level={1}>🇩🇪 Zustand</Title>
      <Todo list={todoList} onSubmit={onSubmit} onCheck={checkTodo} />
    </div>
  );
}
