import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import aboutimage from '../public/img/aboutprofile.jpg'
import findStrapiElementById from './utils/strapiutil'



export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(findStrapiElementById(products, 2))
  return (
    <body>
    <div className='main-container flex-col' >
      <div className='hero-image-container w-6/6'>
      <Image src={mainImage} alt="Hero image" width={500} height={500} quality={100}/>
      </div>
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        {/* <pre>{findArrayElementById(products, 1)}</pre> */}
        <header>This is head/nav</header>
      <h1 className='text-2xl	text-zinc-900 font-bold font-light'>Bergen based designer. <br/>
      Works in varius fields of design with focus on the meeting <br/>between form, materials and humans.</h1>
      <p className='flex-1 w-2/3' >{products[1].attributes.description}</p>
      
      <footer>This is Foot</footer>
      </main>
      </div>
      </body>
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


// function findArrayElementById(products, id) {
//   console.log(products)
//   return products.find((element) => {
//     return element.id === id;
//   })
// }


// const allProducts = products.map((products) =>
// <p>{products}</p>);



