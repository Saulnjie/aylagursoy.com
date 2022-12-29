import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from "dotenv"
dotenv.config()

const url = process.env.NEXT_PUBLIC_DATO_CMS_URL
const token = process.env.NEXT_PUBLIC_DATO_CMS_TOKEN

if (!token || !url) {
    throw new Error("Token or URL missing from environment")
}

const config: CodegenConfig = {
    schema: {
        [url]: {
            headers: {
                "Authorization": token,
                "X-Exclude-Invalid": "true"
            }
        }
    },
    documents: ['pages/*.tsx'],
    generates: {
        './graphql/': {
            preset: 'client',
            plugins: [],
            config: {
                namingConvention: {
                    enumValues: "change-case-all#titleCase",
                }
            }
        }
    }
}

export default config
