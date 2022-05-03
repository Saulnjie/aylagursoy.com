import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import Nav from './components/navigation/navigation'


export default function Home({
    products,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    // console.log(products)
    return (
      // <div className='nav-wrapper'>
      <div className='fullwidth-container'>
        <div className='nav-work-container'> 
        <header><Nav/></header>
        </div>
        <div className='fullscreen-container flex-col'><h2 className='hero-page-title text-zinc-50 text-3xl font-semibold'>Work</h2></div>
        <main className='main-container flex min-h-screen flex-col py-2'>
            {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        <h1 className='page-title text-2xl	text-zinc-900 font-bold'>About my projects</h1>
        <p className='about-paragraph text-base text-zinc-600 w-2/3'>I'm baby woke before they sold out pug, art party migas heirloom cardigan keytar shaman. Dreamcatcher distillery sriracha chartreuse man braid. Photo booth hoodie cliche, post-ironic pork belly hexagon craft beer bespoke occupy next level hell of. Single-origin coffee post-ironic shaman fashion axe lumbersexual</p>
        
        <div className='all-products-container grid gap-5 grid-cols-4'>
            <div className='project-card-container'>
                <Image src={mainImage} width={300} height={250}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>{products[0].attributes.title}</h3>
            <p>{products[0].attributes.description}</p>
            </div>
            <div className='project-card-container'>
            <Image src={mainImage} width={300} height={250}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>{products[1].attributes.title}</h3>
            <p>{products[1].attributes.description}</p>
            </div>
            <div className='project-card-container'>
            <Image src={mainImage} width={300} height={250}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>{products[2].attributes.title}</h3>     
            <p>{products[2].attributes.description}</p>
            </div>
            <div className='project-card-container'>
            <Image src={mainImage} width={300} height={250}/>
            <h3 className='text-xl text-zinc-900 font-semibold'>{products[1].attributes.title}</h3>
            <p>{products[1].attributes.description}</p>
            </div>           
          </div>
          

      <footer>This is Foot</footer>

      </main>
      </div>
      
      // </div>
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