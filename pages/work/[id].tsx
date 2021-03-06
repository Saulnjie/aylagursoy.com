import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { CMS_URL } from '../../consts'
import { ProductResponse } from '../../types/product-response'
import Nav from '../components/navigation/navigation'
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';
import Image from "next/image"

const Crums = () => {
  return (
    <Breadcrumbs 
    useDefaultStyle
    transformLabel={(title) => title + ''}
    />
  );
};



export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return<div>
           <head>
        <title>{product.data.attributes.title}</title>
        {/* <link rel="shortcut icon" href="../public/favico.ico"/> */}
        </head>
   <div className='fullscreen-container'>
    <main className='main-container-special'>
      <header className='py-2'><Nav/></header>
      <div className='product-banner-container'>
      <Image objectFit='cover' layout="fill" src={CMS_URL + product.data.attributes.coverImage.data.attributes.url} />
        <h2 className='product-hero-title text-zinc-50 font-semibold'>{product.data.attributes.title}</h2>
      </div>
        <div className='bcrums-container'>
        <Crums/>
        </div>


    <div className='product-info-overall-container'>
        <div className='product-info-left-container'>
          <h3 className='product-subtitles mb-1 text-zinc-900 font-bold text-lg'>About this project</h3>
          <p className='product-description mb-8 text-zinc-600 font-normal text-base leading-7'>{product.data.attributes.description}</p>
        </div>

        <div className='product-info-right-container'>
          <h3 className='product-subtitles mb-1 text-zinc-900 font-bold text-lg'>Details</h3>
          <p className='product-description text-zinc-600 font-light text-base leading-7'>{product.data.attributes.title}</p>
          <div className='product-additional-info-container mt-8'>
            <div className='addition-production-info'>
              <h4 className='product-mini-titles mb-1 text-zinc-900 font-bold text-base'>Prototype</h4>
              <p className='product-mini-titles-text mb-2 text-zinc-600 font-light text-sm leading-5'>{product.data.attributes.specifications}</p>
            </div>
            <div className='addition-production-info text-zinc-900'>
              <h4 className='product-mini-titles mb-1 font-bold text-base'>Purchase</h4>
              <p className='product-mini-titles-text text-zinc-600 font-light text-sm leading-5'>{product.data.attributes.purchased}</p>
            </div>
          </div>
        </div>
      </div>

      <p className='mt-6 text-zinc-900 font-bold text-lg'>Product Images</p>
      <div className='product-image-overall-container'>
        <div className='product-image-left-container'>
          <div className='product-image-one' >
          <Image objectFit='cover' layout="fill" className="object-[50%_50%]" src={CMS_URL + product.data.attributes.additionalImages.data[0].attributes.url} />
          </div>
        </div>
        <div className='product-image-right-container'>
          <div className='product-image-two'>
         <Image layout="fill" objectFit='cover' className="object-[50%_55%]" src={CMS_URL + product.data.attributes.additionalImages.data[1].attributes.url} />
          </div>
          <div className='product-image-three'>
          <Image layout="fill"
            objectFit='cover'
            className="object-[50%_50%]"
            src={CMS_URL + product.data.attributes.additionalImages.data[2].attributes.url} 
          />
          </div>
        </div>
      </div>
        <Link href={`/work`}>
            <button className='back-btn'>Back</button>
        </Link>

    <footer></footer>
    </main>
  </div>
  </div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id as string

  if (!id) {
    throw new Error('Id is undefined.')
  }

  const response = await fetch(`${CMS_URL}/api/products/${id}?populate=*`)

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const product: ProductResponse = await response.json()

  return { props: { product } }
}
