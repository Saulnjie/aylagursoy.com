import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Nav from './components/navigation/navigation'
import Image from 'next/image'
import { CMS_URL } from '../consts'
import mainBanner from '../public/img/mainbanner.jpg'



export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(findStrapiElementById(products, 2))
  return (
    <body>
      <div className='hero-image-container'>
      <Image objectFit='cover' layout="fill" className="object-[50%_50%]" src={mainBanner} />
    <div className='fullscreen-container' >
        <div className="nav-work-container py-2">
        <header><Nav/></header>
        </div>
        <main className="main-container min-h-screen py-2">
      <h1 className='hero-paragraph text-2xl	text-zinc-900 font-bold font-light flex justify-center '>Bergen based designer. <br/>
      Works in varius fields of design with focus on the meeting <br/>between form, materials and humans.</h1>
      {/* <p className='flex-1 w-2/3' >{products[2].attributes.description}</p> */}
      
      {/* <footer>This is Foot</footer> */}
      </main>
      </div>
      </div>
      </body>
  )
}

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:1337/api/products')

//   if (!response.ok) {
//     throw new Error(await response.text())
//   }

//   const products: ProductsResponse = await response.json()
//   return {
//     props: {
//       products: products.data,
//     },
//   }
// }

export async function getStaticProps() {
  const response = await fetch(`${CMS_URL}/api/products?populate=*`)

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
