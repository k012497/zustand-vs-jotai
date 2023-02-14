import React, { ChangeEventHandler, KeyboardEvent, useState } from 'react';
import { Input as InputComponent } from 'antd';

import { TodoItem } from '../../shared/store/jotai';
import { KEY_ENTER } from '../../shared/constants';

interface InputProps {
  list: Array<TodoItem>;
  onSubmit: (value: string) => void;
  onCheck: (index: number) => void;
}

export default function Input({ list, onSubmit, onCheck }: InputProps) {
  const [text, setText] = useState<string>('');

  const clearText = () => {
    setText('');
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === KEY_ENTER) {
      onSubmit(text);
      clearText();
    }

    return;
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const onTodoItemClick = (index: number) => () => {
    onCheck(index);
  };

  return (
    <div>
      <InputComponent
        style={{ marginBottom: '1rem' }}
        placeholder="오늘의 할 일은 뭔가요?"
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      {list.map((item, index) => (
        <div key={index} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
          <input type="checkbox" checked={item.checked} onChange={onTodoItemClick(index)} />
          {item.todo}
        </div>
      ))}
    </div>
  );
}
