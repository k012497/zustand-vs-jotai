import React from 'react';
import { Typography } from 'antd';

import Todo from '../todo/Todo';

const { Title } = Typography;
export default function ZustandTodoContainer() {
  const onSubmit = () => {
    // TODO: change state onSubmit
  };

  return (
    <div>
      <Title level={2}>✅ 주스탠드로 할 일 만들기</Title>
      <Todo list={[]} onSubmit={onSubmit} onCheck={() => {}} />
    </div>
  );
}
