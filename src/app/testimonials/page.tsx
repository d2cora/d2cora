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

  return (
    <>
      <p className="sr-only">
        Read testimonials from our satisfied clients. See how d2cora has helped D2C brands scale through expert performance marketing, conversion rate optimization, and comprehensive digital growth strategies. Our proven track record of ecommerce success speaks for itself.
      </p>
      <TestimonialList testimonials={testimonials} />
    </>
  )
}
