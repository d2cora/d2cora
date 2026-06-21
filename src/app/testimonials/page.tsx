import { client } from '@/sanity/lib/client'
import TestimonialList from './TestimonialList'

export const revalidate = 3600

export default async function TestimonialsPage() {
  const testimonials = await client.fetch(`*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    rating,
    "imageUrl": image.asset->url
  }`)

  return <TestimonialList testimonials={testimonials} />
}
