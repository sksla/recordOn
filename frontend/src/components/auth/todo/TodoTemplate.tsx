// TodoTemplate.tsx
import React, { ReactNode } from 'react';

type TodoTemplateProps = {
  children: ReactNode;
};

const TodoTemplate = ({ children } : TodoTemplateProps) => {
  return (
    <div className='template'>
      <div className='todo-wrap'>{children}</div>
    </div>
  );
};

export default TodoTemplate;
