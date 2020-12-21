import React, { useContext, useEffect } from 'react';
import { MyContext } from '../Index/App';

const HookCom = (props: any) => {
  const text = useContext(MyContext);
  console.log('text', text);
  useEffect(() => {
    console.log('children', props.children);
  });

  return (
    <div>
      123
    </div>
  );
};

export default HookCom;
