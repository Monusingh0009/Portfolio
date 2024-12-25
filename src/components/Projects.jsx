import React from 'react'
import portfolio from '../assets/portfolio.jpeg'
import SpicyBites from '../assets/SpicyBites.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'
import Home from '../assets/Home.jpeg'
import Property from '../assets/Property.jpeg'
import Blog from '../assets/Blog.jpeg'
const Projects = () => {

    const projectJson = [
        {
          title: 'portfolio',
          desc: 'portfolio showcases his expertise in web development, featuring projects built with cutting-edge technologies like Next.js, TailwindCSS, and MongoDB',
          image: portfolio,
          live: "abc",
          github: "https://github.com/Monusingh0009/Portfolio"
        },
        {
          title: 'Home Service',
          desc: 'Home service website allows users to book appointments for various services like cleaning, plumbing, painting, and electrical work and many more.',
          image: Home,
          live: "https://home-service-website-rho.vercel.app/",
          github: "https://github.com/Monusingh0009/Home-service-website"
        },
        {
          title: 'Property Palace',
          desc: 'Property Palace website is a real estate platform that enables users to search, filter, and list properties for sale or rent, featuring secure authentication with Clerk',
          image: Property,
          live: "https://property-palace.vercel.app/",
          github: "https://github.com/Monusingh0009/PropertyPalace"
        },
        {
          title: 'NextBlog',
          desc: 'Blogging website allows users to explore and manage posts in categories like entertainment, startup, and lifestyle, with a subscription feature for newsletters, built using Next.js, TailwindCSS, and MongoDB',
          image: Blog,
          live: "https://www.Blogger-netify.com/",
          github: "https://github.com/Monusingh0009/NextBlog"
        },
        
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
