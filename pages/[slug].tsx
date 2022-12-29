import { gql } from "graphql-request"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Image from "next/image"
import Container from "../components/Container"
import { ProductBySlugQuery } from "../graphql/graphql"
import { cmsRequest } from "../utils/cms-request"

export default function Product({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container >
      <div className="grid lg:grid-cols-5 gap-8 relative ">
        <div className="col-span-3 grid gap-8 order-2 lg:order-1">
          {[product.coverimage, ...product.images].map((image) => {
            return (
              <div className="relative w-full h-full">
                <Image className="object-cover" placeholder="blur" src={image.url} blurDataURL={image.blurUpThumb || undefined} layout="responsive" alt={image.alt || undefined} height="100%" width="100%" />
              </div>
            )
          })}
        </div>
        <div className="col-span-2 lg:top-28 lg:sticky h-max order-1">
          <span className="text-4xl leading-tight lg:-mt-2.5 font-semibold block mb-4">{product.title}</span>
          <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-lg prose text-zinc-700 leading-relaxed" />
          <div className="mt-8">
            {!product.purchaseInformation ? <span className="text-gray-700">Not yet available for purchase</span> : (
              <div>
                <span className="text-lg font-semibold mb-4 block">Purchase information</span>
                <div className="prose" dangerouslySetInnerHTML={{ __html: product.purchaseInformation }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

const PRODUCT_BY_SLUG_QUERY = gql`
  query ProductBySlug($slug: String!) {
    product(filter: {slug: {eq: $slug}}) {
      id
      title
      slug
      description
      specifications
      purchaseInformation
      excerpt
      coverimage {
        id
        url
        alt
        blurUpThumb
      }
      images {
        url
        alt
        id
        blurUpThumb
      }
    }
  }
`

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const slug = ctx.params?.slug as string
  const data = await cmsRequest<ProductBySlugQuery>(PRODUCT_BY_SLUG_QUERY, { slug })

  if (!data.product) {
    throw new Error(`No products for slug '${slug}' was found`)
  }

  return { props: { product: data.product } }
}