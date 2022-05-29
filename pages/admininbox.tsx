import type { InferGetStaticPropsType,InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

if (!jwt) {
  return null
}

  return (
    <div>

    <div className="fullwidth-container">
      <div className="nav-work-container py-2">
        <header>
       <Adminnav/>
        </header>
      </div>
      <div className="fullscreen-container flex-col">
        <h1 className="hero-page-title text-3xl font-semibold text-zinc-800">
          Inbox
        </h1>
      </div>
    </div>

        <main className="main-container flex min-h-screen  py-2">
          <div className="bcrums-container flex w-full flex-row justify-between">
            <Crums />
          </div>
          <h2 className='inbox-subtitle text-zinc-900 font-semibold text-lg'>These are all your messages:</h2>
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

export async function getServerSideProps() {
  const response = await fetch(`${CMS_URL}/api/messages`)

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
