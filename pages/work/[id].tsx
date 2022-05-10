import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { CMS_URL } from '../../consts'
import { ProductResponse } from '../../types/product-response'
import Nav from '../components/navigation/navigation'

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div className='fullscreen-container'>
    <main className='main-container'>
    {/* <div className="nav-work-container py-2"> */}
      <header><Nav/></header>
      {/* </div> */}
      <div className='product-banner-container'><h2 className='text-zinc-50 font-semibold'>{product.data.attributes.title}</h2></div>
        {/* <p className='img-test'>Viewing product: {product.data.attributes.coverImage}</p> */}
      <p className='crums text-gray-500 mt-4'>Breadcrums</p>

    <div className='product-info-overall-container mt-12'>
        <div className='product-info-left-container'>
          <h3 className='product-subtitles mb-1'>About this project</h3>
          <p className='product-description'>Viewing product: {product.data.attributes.description}</p>
        </div>

        <div className='product-info-right-container'>

        <h3 className='product-subtitles mb-1'>Details</h3>
          <p className='product-description'>Viewing product: {product.data.attributes.title}</p>

          <div className='product-additional-info-container mt-8'>
            <div className='addition-production-info'>
              <h4 className='product-mini-titles mb-1'>Prototype</h4>
              <p className=''>{product.data.attributes.specifications}</p>
            </div>
            <div className='addition-production-info'>
              <h4 className='product-mini-titles mb-1'>Purchase</h4>
              <p className=''>{product.data.attributes.purchased}</p>
            </div>
          </div>

        </div>

      </div>

      <p className='mt-12'>Product Images</p>
      <div className='product-image-overall-container'>
        <div className='product-image-left-container'>
          <div className='product-image-one'>${product.data.attributes.additionalImages}</div>
        <Link href={`/work`}>
        <button className='back-btn'>Back</button>
        </Link>
        </div>
        <div className='product-image-right-container'>
          <div className='product-image-two'>2</div>
          <div className='product-image-three'>3</div>
        </div>
      </div>
    <footer>This is Foot</footer>
    </main>
  </div>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id as string

  if (!id) {
    throw new Error('Id is undefined.')
  }

  const response = await fetch(`${CMS_URL}/api/products/${id}`)

  if (!response.ok) {
    throw new Error(await response.text())
  }

  const product: ProductResponse = await response.json()

  return { props: { product } }
}
