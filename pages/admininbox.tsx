import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from './components/navigation/navigation'
import { renderToHTML } from 'next/dist/server/render'
import { detectContentType } from 'next/dist/server/image-optimizer'
import Adminnav from './components/navigation/adminnav'
import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs'
import { MessagesResponse } from '../types/messages-response'
import { CMS_URL } from '../consts'

const Crums = () => {
  return <Breadcrumbs useDefaultStyle transformLabel={(title) => title + ''} />
}



export default function Home({
  messages,
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
    `${CMS_URL}/api/messages/${id}`,
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


  return (
    <div>

    <div className="fullwidth-container">
      <div className="nav-work-container py-2">
        <header>
       <Adminnav/>
        </header>
      </div>
    </div>

        <main className="main-container flex min-h-screen  py-2">
          <div className="bcrums-container flex w-full flex-row justify-between">
            <h1 className="text-2xl	font-bold text-zinc-900">Admin Inbox</h1>
            <Crums />
          </div>
          <h2 className='inbox-subtitle text-zinc-900 font-semibold text-lg'>These are all your messages</h2>
          {messages.data.map(message => {
            return (
              <div className="all-messages-container"  key={message.id}>
                  <span className='text-zinc-900 font-semibold'>{message.id}</span>
                <div className='single-message-container'>
                <span className="message-name text-zinc-900 font-semibold">Message from: {message.attributes.name}</span>
                <p className='actual-message text-zinc-900 font-normal'>{message.attributes.message}</p>
                <button onClick={() => {
                          console.log(jwt);
                          let deleteProd = confirm(
                            `Are you sure you want to delete this message?`
                          );
                     

                          if (deleteProd) {
                            deleteThing(message.id);
                          }
                        }} className='delete-btn'>Delete</button>
                <p className='message-created text-sm text-zinc-900 font-light'>{message.attributes.createdAt}</p>
                </div>
              </div>
            )
          })}
        </main>
  
        </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:1337/api/messages')

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const messages: MessagesResponse = await response.json()
  return {
    props: {
      messages
    },
  }
}
