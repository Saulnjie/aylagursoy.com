import type { InferGetStaticPropsType } from 'next'
import { ProductsResponse } from '../types/products-response'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <pre>{JSON.stringify(products, null, 2)}</pre>
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
