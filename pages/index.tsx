import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'


export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='main-container'>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <p>THIS IS A TEXT</p>
      <Image 
      src={mainImage}
      height={400}
      width={500}/>
    </div>
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

