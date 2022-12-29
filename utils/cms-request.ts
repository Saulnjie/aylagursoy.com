import { request, Variables } from "graphql-request";

export async function cmsRequest(query: string, variables?: Variables) {
    const url = process.env.NEXT_PUBLIC_DATO_CMS_URL
    const token = process.env.NEXT_PUBLIC_DATO_CMS_TOKEN

    if (!url || !token) {
        throw new Error("DatoCMS token or url is missing from environment variables")
    }

    return await request(url, query, variables, {
        Authorization: token
    })
}