import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Nav from './components/navigation/navigation'
import Image from 'next/image'
import { CMS_URL } from '../consts'
import mainBanner from '../public/img/mainbanner.jpg'
import mainBannertwo from '../public/img/coatedbackground.jpg'




export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <body>
      <div className='hero-image-container'>
      <Image objectFit='cover' layout="fill" className="object-[50%_50%]" src={mainBanner} />
    <div className='fullscreen-container pr-4' >
        <div className="nav-work-container py-2">
        <header><Nav/></header>
        </div>
      <main className="main-container py-2">
        <div className='hero-paragraph'>
        <h1 className='text-2xl	text-zinc-900 font-bold font-light'>Bergen based designer. <br/>
        Works in varius fields of design with focus on the meeting <br/>between form, materials and humans.</h1>
        </div>
      </main>
      </div>
      </div>
      </body>
  )
}

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
