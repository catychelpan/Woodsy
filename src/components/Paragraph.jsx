import {useRef} from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

// eslint-disable-next-line react/prop-types
export default function Paragraph({value}) {

    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start end', 'start start'],
    })

    // eslint-disable-next-line react/prop-types
    const words = value.split(" ");


    return (
        <p 
        ref={element} 
        className='lg:max-w-6xl flex flex-wrap justify-center leading-[120%] font-bold text-4xl text-primary_light'
        >{
            words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })
        }
        </p>
    )
}

// eslint-disable-next-line react/prop-types
const Word = ({children, range, progress}) => {

    const opacity = useTransform(progress, range, [0,1])
    return (
        <span className="mr-[18px] mt-[12px] relative">
            <span className="absolute opacity-[0.1]">{children}</span>
            <motion.span style={{opacity: opacity}} >
                {children}
            </motion.span>
        </span>
        
    )
}


