import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'


export default function Home({
    products,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className='main-container w-max flex-col'>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        <main className="flex min-h-screen flex-col items-center justify-center py-2 ">
            <header className='w-max' >This is head/nav</header>
            <Image 
            src={mainImage}
           className='w-max h-fit'/>
        <h1 className='text-2xl	text-zinc-900 font-bold'>About my projects</h1>
        <p className='about-paragraph text-base text-zinc-600'>I'm baby woke before they sold out pug, art party migas heirloom cardigan keytar shaman. Dreamcatcher distillery sriracha chartreuse man braid. Photo booth hoodie cliche, post-ironic pork belly hexagon craft beer bespoke occupy next level hell of. Single-origin coffee post-ironic shaman fashion axe lumbersexual</p>
        <div className='all-products-container grid gap-5 grid-cols-4'>
            <div className='project-card-container'>
                <Image src={mainImage}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>The Donut</h3>
            <p>1</p>
            </div>
            <div className='project-card-container'>
                <Image src={mainImage}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>The Donut</h3>
            <p>2</p>
            </div>
            <div className='project-card-container'>
                <Image src={mainImage}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>The Donut</h3>     
            <p>3</p>
            </div>
            <div className='project-card-container'>
                <Image src={mainImage}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>The Donut</h3>
            <p>4</p>
            </div>
            
        </div>
      <footer>This is Foot</footer>
      </main>
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