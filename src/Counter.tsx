import React from 'react';

interface CounterProps {
    count: number;
}

const Counter = (props: CounterProps) => {
  return (
    <div className="Counter">
      <h2>Voc� tem { props.count } counters;</h2>
    </div>
  );
}

export default Counter;
