import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { gql } from "graphql-request"
import { cmsRequest } from '../utils/cms-request'
import Link from "next/link"
import Container from '../components/Container'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container className='grid w-full sm:grid-cols-2 2xl:grid-cols-3 gap-4 px-16' wide>
      {products.map((product, index) => {
        return (
          <Link key={product.id} href={`/${product.slug}`}>
            <a>
              <div className='relative group h-[450px] w-full'>
                <div className='absolute opacity-0 group-hover:opacity-95 flex top-0 left-0 h-full w-full bg-brand z-10 flex-col justify-end items-start p-8 transition duration-500'>
                  <span className='block mb-1 font-semibold text-lg'>{product.title}</span>
                  <span className="text-neutral-700">{product.excerpt}</span>
                </div>
                <Image src={product.coverimage.url} alt={product.coverimage.alt} layout="fill" objectFit='cover' />
              </div>
            </a>
          </Link>
        )
      })}
    </Container>
  )
}

const QUERY = gql`
{
  allProducts {
    id
    excerpt
    title
    slug
    coverimage {
      url
      alt
    }
  }
}
`

export async function getStaticProps() {
  const { allProducts } = await cmsRequest(QUERY)

  return {
    props: {
      products: allProducts
    },
  }
}
