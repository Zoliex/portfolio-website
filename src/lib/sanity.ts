import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: (import.meta as any).env.VITE_SANITY_PROJECT_ID,
  dataset: (import.meta as any).env.VITE_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-08', // use current date (YYYY-MM-DD) to target the latest API version
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
