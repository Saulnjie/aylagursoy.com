import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='main-container'>
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
        <pre>{JSON.stringify(products, null, 2)}</pre>
        <header>This is head/nav</header>
      <Image 
      src={mainImage}
      height={400}
      width={500}/>
      <h1 className='text-2xl	text-zinc-900 font-bold font-light'>Bergen based designer. <br/>
Works in varius fields of design with focus on the meeting <br/>between form, materials and humans.</h1>
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
// const allProducts = products.map((products) =>
// <p>{products}</p>);



