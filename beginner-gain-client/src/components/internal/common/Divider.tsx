import React from 'react';

export interface IDivider {
  color: string;
}

const Divider = ({ color }: IDivider) => {
  return (
    <div className={`border border-${color} w-full my-5`}></div>
  );
}

export default Divider;
