import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { gql } from "graphql-request"
import { cmsRequest } from '../utils/cms-request'
import Link from "next/link"
import Container from '../components/Container'
import { ProductHomeQuery } from '../graphql/graphql'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container className='grid w-full sm:grid-cols-2 2xl:grid-cols-3 gap-4 px-16' wide>
      {products.map((product) => {
        return (
          <Link key={product.id} href={`/${product.slug}`}>
            <a>
              <div className='relative group h-[450px] w-full'>
                <div className='absolute opacity-0 group-hover:opacity-95 flex top-0 left-0 h-full w-full bg-brand z-10 flex-col justify-end items-start p-8 transition duration-500'>
                  <span className='block mb-1 font-semibold text-lg'>{product.title}</span>
                  <span className="text-neutral-700">{product.excerpt}</span>
                </div>
                <Image placeholder='blur' src={product.coverimage.url} blurDataURL={product.coverimage.blurUpThumb || undefined} alt={product.coverimage.alt || undefined} layout="fill" objectFit='cover' />
              </div>
            </a>
          </Link>
        )
      })}
    </Container>
  )
}

const QUERY = gql`
  query ProductHome {
    allProducts {
      id
      excerpt
      title
      slug
      coverimage {
        url
        blurUpThumb
        alt
      }
    }
  }
`

export async function getStaticProps() {
  const { allProducts } = await cmsRequest<ProductHomeQuery>(QUERY)

  return {
    props: {
      products: allProducts
    },
  }
}
