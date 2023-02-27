import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
const headerVariants ={
  hidden:{
    y:"-100vh",
  },
  visible:{
    y:0,
    transition:{
      delay:0.3,
      duration:0.6,
      type:"spring",
      damping:8
    }
    }
}
function Header() {
  return (
    <motion.div className='w-full flex justify-between sticky top-0 z-50 bg-black shadow-2xl'
    variants={headerVariants}
    initial='hidden'
    animate='visible'
    >
        <div className='items-center md:flex gap-2 hidden '>
            <div>
              <motion.h1 className='cursor-pointer w-fit p-1 ml-3'
              whileHover={{scale:1.1}}
              >
                اسکرچ
              </motion.h1>
            </div>
            <div >
              <div className='border-gray-800 border-l-4  border-r-4 w-fit p-1 px-2 cursor-pointer'>
              <motion.h1
              whileHover={{scale:1.1}}
              >
                دست سازه ها 
              </motion.h1>
              </div>
            </div>
            <div>
              <motion.h1 className='w-fit p-1 cursor-pointer'
              whileHover={{scale:1.1}}
              >
                اثار هنری
              </motion.h1>
            </div>
        </div>
        <div className='flex gap-2 items-center'> 
            <h1 className='text-2xl text-purple-900 w-32 ml-20 md:m-0'>فرهنگستان علامه حلی</h1>
            <Image
            className='bg-white'
            src='/allamelogo.svg'
            layout='fixed'
            width={80}
            height={80}
            />
        </div>
    </motion.div>
  )
}

export default Header