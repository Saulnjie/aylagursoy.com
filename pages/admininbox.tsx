import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import Nav from './components/navigation/navigation'
import { renderToHTML } from 'next/dist/server/render'
import { detectContentType } from 'next/dist/server/image-optimizer'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Crums = () => {
  return (
    <Breadcrumbs 
    useDefaultStyle
    transformLabel={(title) => title + ''}
    />
  );
};

// Her blir det if jwt token - så render dette : Om ikke så redirect I guess

export default function Home({
    products,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <div className='fullwidth-container'>
        <div className="nav-work-container py-2">
        <header><Nav/></header>
        </div>

        <div className='main-container flex-col'>
        <main className="flex min-h-screen flex-col items-center justify-center py-2 ">
        <div className='bcrums-container'>
        <Crums/>
        </div>
        <h1 className='text-2xl	text-zinc-900 font-bold'>Admin Inbox</h1>
        </main>
        
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