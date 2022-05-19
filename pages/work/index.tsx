import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../../types/products-response'
import Image from 'next/image'
import Nav from '../components/navigation/navigation'
import { CMS_URL } from '../../consts'
import Link from "next/link"
import SearchBar from "../components/searchbar/search"
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

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
        <div className="fullwidth-container">
    <div className="nav-work-container py-2">
        <header>
          <Nav />
        </header>
      </div>
      <div className="fullscreen-container flex-col">
        <h1 className="hero-page-title text-3xl font-semibold text-zinc-50">
          Work
        </h1>
      </div>
      <main className="main-container flex min-h-screen flex-col py-2">

      <div className='searchbar-container'>
          <div className='bcrums-container'>
          <Crums/>
          </div>
          <SearchBar />
      </div>

        <h2 className="page-title text-2xl font-bold text-zinc-900">
          About my projects
        </h2>
        <p className="about-work-paragraph w-3/3 text-light text-zinc-600">
          I'm baby woke before they sold out pug, art party migas heirloom
          cardigan keytar shaman. Dreamcatcher distillery sriracha chartreuse
          man braid. Photo booth hoodie cliche, post-ironic pork belly hexagon
          craft beer bespoke occupy next level hell of. Single-origin coffee
          post-ironic shaman fashion axe lumbersexual
        </p>

        <div className="all-products-container cards grid grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <Link  href={`/work/${product.id}`}>
                <a className="project-card-container cards">
                  <div className='card-image-container'>
                  <Image src={CMS_URL + product.attributes.coverImage.data.attributes.url} objectFit='cover' layout="fill" height={400} width="100%"  />
                  </div>
                <h3 className="card-title text-xl font-semibold ">
                  {product.attributes.title}
                </h3>
                <p className='card-description text-light'>{product.attributes.introDescription}</p>
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
  const response = await fetch(`${CMS_URL}/api/products?populate=*?`)

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
