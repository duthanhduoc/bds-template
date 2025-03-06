import { Carousel } from '@/components/carousel'
import { ThreeItemGrid } from '@/components/grid/three-items'
import Footer from '@/components/layout/footer'
import { homepageItems } from '@/data'

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
}

export default function HomePage() {
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-bold text-center uppercase text-gray-900 mt-10 mb-3'>
        Được BDS
      </h1>
      <p className=' md:text-xl text-center text-gray-600 mb-10'>
        Uy tín - Chất lượng - Nhanh chóng
      </p>
      <ThreeItemGrid products={homepageItems} />
      <Carousel />
      <Footer />
    </div>
  )
}
