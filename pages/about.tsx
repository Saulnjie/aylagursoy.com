import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import aboutimage from '../public/img/aboutprofile.jpg'
import findStrapiElementById from './utils/strapiutil'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(findStrapiElementById(products, 2))
    return (
        <div className='main-about-container flex-row'>
        <main className="flex min-h-screen  py-2">
        <div className='left-about-container flex-col w-3/6'>
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        <header>This is head/nav</header>
        <h1 className='text-2xl	text-zinc-900 font-bold'>About</h1>
        <p className='about-paragraph text-base text-zinc-600'>Furniture designer based in Bergen.
Ayla focuses on the meeting between form, materials and humans, and she is driven by her curiosity and
attention to details. She is a hands
-
on designer, using physical prototyping as her main tool in her design
process. 

Her process results in a functional, clean, yet bold aesthetic. 
She is currently taking her master in
furniture and spatial design at the University of Bergen.

She is working in different fields within design. Interior stylist at Heem Bergen, building her
studio and her vision for it, and also establishing Ytre Studio together with two other Bergen based
designers.
</p>
<h2 className='text-2xl	text-zinc-900 font-bold'>Exhibitions</h2>
<ul className='text-base text-zinc-600'>
    <li>Bergen interior and designfair 2018
</li>
    <li>Stockholm furniture fair 2018
</li>
    <li>Stockholm furniture fair 2019
</li>
    <li>Kraft Bergen 2019
</li>
    <li>Oslo design fair 2019
</li>
    <li>Fjell festning light festival 2019
</li>
    <li>Havrommet opening minifestival 2020</li>
    <li>Akvariet Bergen 2020
</li>
</ul>
<h2 className='text-2xl	text-zinc-900 font-bold'>Other</h2>
<ul className='text-base text-zinc-600'>
    <li>Internship at Anderssen and Voll 2018
 </li>
    <li>Bachelor in furniture and spatial design/interior architecture
- KMD university in Bergen
2019</li>
    <li>Exhibitiondesign for Fjordfiesta, Oslo designfair 2019
</li>
    <li>Stylist at Heem Bergen (current)
</li>
    <li>Master in Design - KMD university in Bergen (current)</li>
</ul>
</div>


        <div className='right-about-container flex-col w-3/6'>
        <Image 
        src={aboutimage}
        height={600}
        width={450} 
        
        />

        <p className='contact-paragraph text-base text-zinc-600'>For any questions or inquiries, please do not hesitate to contact me through social media or by email.</p>
        <h3 className='text-xl text-zinc-900 font-bold'>Contact</h3>
        <div className='icon-container text-zinc-600 flex-row'>
        <p className='icon-text text-sm w-1/3'>me@aylagursoy.com </p>
        <p className='icon-text text-xs w-1/3'>+47 950 36 921</p>
        <p className='icon-text text-sm w-1/3'>@aylagursoy</p>
        </div>
        </div>
      </main>
      
      <footer>This is Foot</footer>
      </div>
    )
  }

export async function getStaticProps() {
    const response = await fetch('http://localhost:1337/api/products')
  
    if (!response.ok) {
      throw new Error(await response.text())
    }
  
    const products: ProductsResponse = await response.json()
    return {
      props: {
        products: products.data,
      },
    }
  }