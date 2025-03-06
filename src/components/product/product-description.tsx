import Price from '@/components/price'
import Prose from '@/components/prose'

import { Product } from '@/data'

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className='space-y-4'>
      <div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
        <h1 className='mb-2 text-5xl font-medium'>{product.title}</h1>
        <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
          <Price amount={product.price} />
        </div>
      </div>
      <div>
        <span className=' min-w-[48px] text-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-blue-600'>
          {product.beds} phòng ngủ
        </span>
      </div>
      <div className='italic'>{product.address}</div>
      {product.description ? (
        <Prose
          className='mb-6 text-sm leading-tight dark:text-white/[60%]'
          html={product.description}
        />
      ) : null}
    </div>
  )
}
