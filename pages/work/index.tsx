import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../../types/products-response'
import Image from 'next/image'
import Nav from '../components/navigation/navigation'
import { CMS_URL } from '../../consts'
import Link from "next/link"
import SearchBar from "../components/searchbar/search"
import React, { useState } from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Crums = () => {
  return (
    <Breadcrumbs 
    useDefaultStyle
    transformLabel={(title) => title + ''}
    />
  );
};


export default function Home({
  products: initialProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [products, setProducts] = useState(initialProducts)
  console.log(process.env.NEXT_PUBLIC_CMS_URL)
  return (
        <div className="fullwidth-container">
    <div className="nav-work-container py-2">
        <header>
          <Nav />
        </header>
      </div>
      <div className="fullscreen-container flex-col">
        <h1 className="hero-page-title text-3xl font-semibold text-zinc-800">
          Work
        </h1>
      </div>
      <main className="main-container flex min-h-screen flex-col py-2">

      <div className='searchbar-container'>
          <div className='bcrums-container'>
          <Crums/>
          </div>
          <SearchBar items={products} setItems={setProducts} />
      </div>

        <h2 className="page-title text-2xl font-bold text-zinc-900">
          About my projects
        </h2>
        <p className="about-work-paragraph w-3/3 text-light text-zinc-600">
        My focus as a designer and interior designer (graduated June, 2022) is in the meeting between
form, materiality and human. I am driven by my curiosity to the design field, all the way down to the level of detail.
My approach to the subject is guided by working alternately with digital and practical methods. Indesign,
photoshop and modeling software such as digital tools and sketching, mock ups and reflection
as practical, which together provide an innovative search for new solutions. Keywords that occupy
me in all projects I participate in are: tactility, contrasts, composition and accuracy.
        </p>

        <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
          {products.length == 0 ? "No products to show" : products.map((product) => {
            console.log('image :', process.env.NEXT_PUBLIC_CMS_URL + product.attributes.coverImage.data.attributes.url)
            const imageUrl = process.env.NEXT_PUBLIC_CMS_URL + product.attributes.coverImage.data.attributes.url
            return (
              <Link key={product.id} href={`/work/${product.id}`}>
                <a className="hover:opacity-80 transition">
                  <div className='relative h-[250px] mb-2'>
                  <Image src={imageUrl} layout="fill" objectFit='cover'  className="object-[50%_50%]" />
                  </div>
                <h3 className="text-xl font-semibold ">
                  {product.attributes.title}
                </h3>
                <p className='text-zinc-600'>{product.attributes.introDescription}</p>
                </a>
              </Link>
            )
          })}
        </div>
        <footer></footer>
      </main>
    </div>

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
