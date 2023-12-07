import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';



const ScrollButton = () => {

    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollToBottom;
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled >= 0) {
            setVisible(true)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className=''>

            <button onClick={scrollToTop} className='flex flex-col justify-center items-center'>
                <div className='animate-ping rounded-full  bg-sky-400 opacity-75 h-4 w-4 ' />
                <AiOutlineArrowUp className='animate-bounce  text-4xl' style={{ display: visible ? 'inline' : 'none' }} />
            </button>
        </div>
    );
}

export default ScrollButton;
