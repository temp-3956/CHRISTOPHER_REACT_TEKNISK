import { useState, useEffect } from "react";

function CountDown() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const displayText = count < 0 ? "Gratulerer med Dagen!" : count.toString();

    return (
        <>
            <h1>{displayText}</h1>
        </>
    );
}

export default CountDown;