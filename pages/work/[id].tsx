import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { CMS_URL } from '../../consts'
import { ProductResponse } from '../../types/product-response'

export default function Product({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>
    <h2>Viewing product: {product.data.attributes.title}</h2>
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
