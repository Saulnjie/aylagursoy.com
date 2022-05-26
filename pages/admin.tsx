import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CMS_URL } from '../consts'
import Link from "next/link"
import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Nav from './components/navigation/navigation'
import Adminnav from './components/navigation/adminnav'
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
    
    async function deleteThing(id: number) {
      let response= await fetch(
      `${CMS_URL}/api/products/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const data = await response.json();
    console.log(data)
    router.replace(router.asPath);
  }


  
  // const logout = document.querySelector('.logout');
  // if (logout !== null) {
  //   logout.onclick = function () {
  //     localStorage.clear();
  //     router.push('/')
  //     return
  //   };
  // }


    return  <div className='main-container'>
     {/* <header><Nav/></header> */}
     <header className='py-2'><Adminnav/></header>
     <div className='bcrums-container flex flex-row justify-between'>
     <h1 className=' text-3xl font-semibold text-zinc-900'>Admin page</h1>
     <Crums/>
     </div>
     {/* {jwt} */}
        <p className='token-paragraph'>You are logged in</p>
      <div className='token-contaier'>
        <Link href={`/`}>
       <button className='logout logout-btn'>Logout</button>
       </Link>
      </div>

       <h2 className='text-lg	text-zinc-900 font-bold'>These are all your posted products and articles</h2>
     <div className="all-products-container cards grid grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <div>
              <Link  href={`/work/${product.id}`}>
                <a className="project-card-container cards">
                <Image src={"/img/mainbanner.jpg"} width={300} height={250} />
                <h3 className="text-xl font-semibold text-zinc-600">
                  {product.attributes.title}
                </h3>
                </a>
              </Link>
                <button onClick={() => {
                          console.log(jwt);
                          let deleteProd = confirm(
                            `are you sure you want to delete this product?`
                          );
                          if (deleteProd) {
                            deleteThing(product.id);
                          }
                        }} className='delete-btn'>Delete</button>
                {/* <p className='text-zinc-600 text-light'>{product.attributes.introDescription}</p> */}
                {/* <img className='test-img' src="${product.attributes.coverImage}"/> */}
              </div>
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




// logout theory 
// const strapiAccessToken = localStorage.getItem("strapi-access-token")
// const form = document.querySelector("#create-album-form")


// const loginButton = document.querySelector(".login_button")
// const logoutButton = document.querySelector(".logout_button")

// if (!strapiAccessToken) {
//   console.log('There is no JWT token');
//   alert("You are not a cerified superuser. Press OK to redirect!");
//   window.location.replace("/login.html")
// }


// logoutButton.onclick = () => {
//   localStorage.removeItem("strapi-access-token")
//   window.location.replace("/")
// }


// if (strapiAccessToken) {
//   loginButton.style.display = "none";
// } else {
//   logoutButton.style.display = "none";
// }