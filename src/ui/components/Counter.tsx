import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAction = (step: number, dir: 'incr' | 'desc') => {

        // setCount(prevCount => prevCount + (dir === "incr" ? step : -step));
        setCount(function (prevCount) {
            if (dir === 'incr') {
                return prevCount + step;
            }
            return prevCount - step;
        });
    }

    return (
        <>
            <CounterDisplay result={count} />
            <CounterButton onAction={handleAction} />
            <CounterButton onAction={handleAction} step={5} />
        </>
    )
}