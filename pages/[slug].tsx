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
          {product.images.map((image) => {
            return (
              <div className="relative w-full h-full">
                <Image className="object-cover" src={image.url} layout="responsive" alt={image.alt || undefined} height="100%" width="100%" />
              </div>
            )
          })}
        </div>
        <div className="col-span-2 lg:top-28 lg:sticky h-max order-1">
          <span className="text-4xl leading-tight lg:-mt-2.5 font-semibold block mb-4">{product.title}</span>
          <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-lg prose text-zinc-800 leading-relaxed" />
          <div className="mt-8">
            {product.purchaseLocations.length === 0 ? <span className="text-neutral-600">Not yet available for purchase</span> : (
              <ul>
                {product.purchaseLocations.map((location) => {
                  return (
                    <li>
                      <a href={location}>{location}</a>
                    </li>
                  )
                })}
              </ul>
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
      purchaseLocations
      excerpt
      coverimage {
        url
        alt
      }
      images {
        url
        alt
        id
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