import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MyTest = () => {
    const roundedValue = Math.round(70);
    return (
        <div className='w-[100px]'>
            <CircularProgressbar
                value={70}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
                animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: 'none' })}
            />
        </div>
    );
};

export default MyTest;