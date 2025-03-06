import Link from 'next/link'
import { GridTileImage } from './grid/tile'
import { homepageItems } from '@/data'

export async function Carousel() {
  const carouselProducts = homepageItems.slice(3, 8)

  return (
    <div className='w-full overflow-x-auto pb-6 pt-1'>
      <ul className='flex animate-carousel gap-4'>
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.url}${i}`}
            className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'
          >
            <Link
              href={`/product/${product.url}`}
              className='relative h-full w-full'
            >
              <GridTileImage
                alt={product.title}
                label={{
                  position: 'bottom',
                  title: product.title as string,
                  amount: product.price
                }}
                src={product.featuredImage}
                fill
                sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
