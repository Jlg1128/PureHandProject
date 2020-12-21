import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log(1);
  })
  return (
    <div>
      <ul>
        <li key='1'>
        </li>
        <li key='2'>
        </li>
        <li key='4'>
        </li>
      </ul>
    </div>
  )
}