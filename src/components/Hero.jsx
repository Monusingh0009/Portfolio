import React from 'react'
import hero from '../assets/Hero.png'
import monu from '../assets/monu3.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'
import Github from '../assets/Github (2).png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Monu <span className='text-red-500'>Kumar</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
               <p className='mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1s-5w9CRvY04ztrDHSgR-qA6-Imf8J75x/view?usp=sharing" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={monu} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
   
        <a href="https://www.facebook.com/profile.php?id=100093345494307" target="_blank" rel="noopener noreferrer">
  <img src={facebook} alt="Facebook" className="w-20" />
</a>
<a href="https://github.com/Monusingh0009" target="_blank" rel="noopener noreferrer">
<img src={Github} alt="Github" className="w-20" />
</a>
       
        <img src={twitter} alt="" className='w-20'/>
       
        <a href="https://www.linkedin.com/in/monu-kumar-904898253/" target="_blank" rel="noopener noreferrer">
  <img src={linkedin} alt="LinkedIn" className="w-20" />
</a>

      </div>
    </section>
  )
}

export default Hero
