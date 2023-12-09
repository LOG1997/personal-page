import { motion } from 'framer-motion'
import React from 'react'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from "next/image";

export default function HeroContent() {
    return (
        <motion.div initial="hidden" animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b496ff] mr-[10px] h-5 w-5'>
                    </SparklesIcon>
                    <h1 className='Welcome-text text-[12px]'>Full Stack Developer</h1>
                </motion.div>
                <motion.div variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Providing
                        {/* <Providing></Providing> */}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>to be best</span>
                        project experience
                    </span>
                </motion.div>
                <motion.p variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 max-w-[600px]'
                >
                    I&apos;m a full stack developer with a passion for building web applications. I&apos;m a
                    self-taught programmer with a background in computer science and a passion for
                    programming. I&apos;m currently working as a full stack developer at
                </motion.p>
                <motion.a variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Learn more
                </motion.a>
            </div>
            <motion.div variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src='/mainIconsdark.svg'
                    alt='main icons'
                    height={650}
                    width={650}
                ></Image>
            </motion.div>
        </motion.div>
    )
}
