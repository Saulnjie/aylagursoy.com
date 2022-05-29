import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import mainImage from '../public/img/mainbanner.jpg'
import Nav from './components/navigation/navigation'
import Adminnav from './components/navigation/adminnav'
import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs'
import { useForm } from 'react-hook-form'
import { CMS_URL } from '../consts'

interface FormValues {
  title: string
  description: string
  introDescription: string
  coverImage: File[]
  additionalImages: File[]
  specifications: string
  purchased: string
}

const Crums = () => {
  return <Breadcrumbs useDefaultStyle transformLabel={(title) => title + ''} />
}

export default function Home({
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

  const form = useForm<FormValues>()
  const onSubmit = async (values: FormValues) => {
    const form = new FormData()
    
    console.log(values)
    form.append(`files.coverImage`, values.coverImage[0]);
    [...values.additionalImages].forEach(file => {
      form.append("files.additionalImages", file)
    })

    form.append("data", JSON.stringify({
      title: values.title,
      description: values.description,
      introDescription: values.introDescription,
      specifications: values.specifications,
      purchased: values.purchased
    }))

    const response = await fetch(`${CMS_URL}/api/products`, {
      method: "POST",
      body: form,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })

    if (!response.ok) {
      // TODO: Handle error
      throw new Error(await response.text())
    }
    confirm('Post created!')
    console.log(await response.json())
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
        <h1 className="hero-page-title text-3xl font-semibold text-zinc-50">
          Create product
        </h1>
      </div>
    </div>
        <main className="main-container">
          <div className="bcrums-container">
            <Crums />
          </div>
    
          <h1 className="text-2xl	mt-4 font-bold text-zinc-900">Create product</h1>
          <p className="about-paragraph w-2/3 flex-1 text-base text-zinc-600">
            This is the section you can upload your own projects and work. <br/> This will automatically be implemented to your website.
          </p>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h2 className="text-lg	mt-2 mb-4 font-bold text-zinc-900">Fill in info about your product here <br/>*All fields are required</h2>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" {...form.register('title')} required />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input type="text" {...form.register('description')} required/>
            </div>
            <div>
              <label htmlFor="introDescription">Intor description</label>
              <input type="text" {...form.register('introDescription')} required/>
            </div>
            <div>
              <label htmlFor="coverImage">Cover image</label>
              <input type="file" {...form.register('coverImage')} required/>
            </div>
            <div>
              <label htmlFor="additionalImages">Additional Image</label>
              <input
                type="file"
                multiple
                {...form.register('additionalImages')}
                required
              />
            </div>
            <div>
              <label htmlFor="specifications">Specifications</label>
              <input type="text" {...form.register('specifications')} />
            </div>
            <div>
              <label htmlFor="purchased">Purchased</label>
              <input type="text" {...form.register('purchased')} />
            </div>

            <button type="submit" className='submit-btn'>Submit</button>
          </form>


          <footer></footer>
    
        </main>
    
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
