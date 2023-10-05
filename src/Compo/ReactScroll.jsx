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
            top:0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            
            <button onClick={scrollToTop} className=' '>
                <AiOutlineArrowUp className='text-3xl'   style={{ display: visible ? 'inline' : 'none' }}/>
            </button>
        </div>
    );
}

export default ScrollButton;
