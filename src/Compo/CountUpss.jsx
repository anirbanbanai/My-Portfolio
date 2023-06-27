import { useCountUp } from "react-countup";


const CountUpss = ({children}) => {
    useCountUp({
        ref: 'counter',
        end: {children},
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });
    return (
        <div>
            <div className="App">
                <div className="content" />
                <br /> 
                <span id="counter">{children}</span> %
            </div>
        </div>
    );
};

export default CountUpss;