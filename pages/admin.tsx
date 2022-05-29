import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CMS_URL } from '../consts'
import Link from "next/link"
import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
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


  

    return  <div>
          <div className="fullwidth-container">
      <div className="nav-work-container py-2">
        <header>
       <Adminnav/>
        </header>
      </div>
      <div className="fullscreen-container flex-col">
        <h1 className="hero-page-title text-3xl font-semibold text-zinc-50">
          Admin Page
        </h1>
      </div>
    </div>
    <div className='main-container'>
     {/* <header className='py-2'><Adminnav/></header> */}
     <div className='bcrums-container flex flex-row justify-between'>
     <Crums/>
     {/* <h1 className=' text-3xl font-semibold text-zinc-900'>Admin page</h1> */}
          <div className='token-contaier'>
        <p className='token-paragraph'>You are logged in</p>
        <Link href={`/`}>
       <button className='logout logout-btn' onClick={ () => {
            sessionStorage.removeItem("jwt")
            window.location.replace("/")}}>Logout</button>
       </Link>
     </div>
      </div>

       <h2 className='text-lg	text-zinc-900 font-bold'>These are all your current products and posts: </h2>
     <div className="all-products-container cards grid grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <div>
              <Link  href={`/work/${product.id}`}>
                <a className="project-card-container cards">
                <div className='card-image-container'>
                  {/* <img src={CMS_URL + product.attributes.coverImage.data.attributes.url}  className="object-[50%_50%]" /> */}
                  </div>
                <h3 className="text-xl font-semibold text-zinc-600">
                  {product.attributes.title}
                </h3>
                </a>
              </Link>
                <button onClick={() => {
                          console.log(jwt);
                          let deleteProd = confirm(
                            `Are you sure you want to delete this product?`
                          );
                          if (deleteProd) {
                            deleteThing(product.id);
                          }
                        }} className='delete-btn'>Delete</button>
              </div>
            )
          })}
        </div>
        </div>
        <footer></footer>

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




  
  // const logout = document.querySelector('.logout');
  // if (logout !== null) {
  //   logout.onclick = function () {
  //     localStorage.clear();
  //     router.push('/')
  //     return
  //   };
  // }
  // const logoutButton = document.querySelector(".logout-btn")

