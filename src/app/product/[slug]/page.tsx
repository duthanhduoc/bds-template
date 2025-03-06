import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GridTileImage } from '@/components/grid/tile'
import Footer from '@/components/layout/footer'
import { Gallery } from '@/components/product/gallery'
import { ProductProvider } from '@/components/product/product-context'
import { ProductDescription } from '@/components/product/product-description'
import { homepageItems } from '@/data'
import Link from 'next/link'
import { Suspense } from 'react'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const product = homepageItems.find((p) => p.url === params.slug)

  if (!product) return notFound()

  return {
    title: product.title,
    description: product.title,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      images: [
        {
          url: product.featuredImage,
          width: 800,
          height: 600,
          alt: product.title
        }
      ]
    }
  }
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = homepageItems.find((p) => p.url === params.slug)

  if (!product) return notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.title,
    image: product.featuredImage,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      price: product.price
    }
  }

  return (
    <ProductProvider>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className='mx-auto max-w-(--breakpoint-2xl) px-4'>
        <div className='flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black'>
          <div className='h-full w-full basis-full lg:basis-4/6'>
            <Suspense
              fallback={
                <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden' />
              }
            >
              <Gallery
                images={product.images.map((url: string) => ({
                  src: url,
                  altText: product.title
                }))}
              />
            </Suspense>
          </div>

          <div className='basis-full lg:basis-2/6'>
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </ProductProvider>
  )
}

function RelatedProducts({ id }: { id: string }) {
  // Filter to get other products as "related"
  const relatedProducts = homepageItems.filter(
    (product) => product.id !== id && product.hidden
  )

  if (!relatedProducts.length) return null

  return (
    <div className='py-8'>
      <h2 className='mb-4 text-2xl font-bold'>Related Products</h2>
      <ul className='flex w-full gap-4 overflow-x-auto pt-1'>
        {relatedProducts.map((product) => (
          <li
            key={product.url}
            className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'
          >
            <Link
              className='relative h-full w-full'
              href={`/product/${product.url}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.price
                }}
                src={product.featuredImage}
                fill
                sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
