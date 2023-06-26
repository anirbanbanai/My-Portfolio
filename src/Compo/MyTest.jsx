import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
const MyTest = () => {
    useCountUp({ ref: 'counter', end: 10, duration: 2 });
    const [loading, setLoading] = React.useState(false);
    const onStart = () => {
        setLoading(true);
    };

    const onEnd = () => {
        setLoading(false);
    };

    const containerProps = {
        'aria-busy': loading,
    };
    return (
        <div>
            <CountUp
                end={123457}
                duration="3"
                onStart={onStart}
                onEnd={onEnd}
                containerProps={containerProps}
            />
            <div id="counter" aria-busy={loading} />

        </div>
    );
};

export default MyTest;

