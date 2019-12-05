import React from 'react';

interface CounterProps {
    count: number;
}

const Counter = (props: CounterProps) => (
    <div className="Counter">
        <h2>Você tem {props.count} counters;</h2>
    </div>
);

export default Counter;
