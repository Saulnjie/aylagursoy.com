import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CMS_URL } from '../consts'
import Link from "next/link"
import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Nav from './components/navigation/navigation'
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


export default function Admin( {
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [jwt, setJwt] = useState('')
  const router = useRouter()

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt')

    if (!jwt) {
      router.push('/')
      return
    }

    setJwt(jwt)
  }, [])



  
  // const logout = document.querySelector('.logout');
  // if (logout !== null) {
  //   logout.onclick = function () {
  //     localStorage.clear();
  //     router.push('/')
  //     return
  //   };
  // }


    return  <div className='main-container'>
     <header><Nav/></header>
     <div className='bcrums-container flex flex-row justify-between'>
     <h1 className=' text-3xl font-semibold text-zinc-900'>Admin page</h1>
     <Crums/>
     </div>
     {jwt}
      <div className='token-contaier'>
        <p className='token-paragraph'>You are logged in</p>
       <button className='logout logout-btn'>Logout</button>
        <p className='token-paragraph'></p>
      </div>

       <h2 className='text-lg	text-zinc-900 font-bold'>These are all your posted products and articles</h2>
     <div className="all-products-container cards grid grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <Link  href={`/work/${product.id}`}>
                <a className="project-card-container cards">
                <Image src={"/img/mainbanner.jpg"} width={300} height={250} />
                <h3 className="text-xl font-semibold text-zinc-600">
                  {product.attributes.title}
                </h3>
                <button className='delete-btn'>Delete</button>
                {/* <p className='text-zinc-600 text-light'>{product.attributes.introDescription}</p> */}
                {/* <img className='test-img' src="${product.attributes.coverImage}"/> */}
                </a>
              </Link>
            )
          })}
        </div>

        </div>

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

