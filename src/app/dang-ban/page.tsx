import Grid from '@/components/grid'
import ProductGridItems from '@/components/layout/product-grid-items'
import { homepageItems } from '@/data'

export const metadata = {
  title: 'Đang bán',
  description: 'Sản phẩm đang bán'
}

export default async function ProductDetail(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <div className='px-4'>
      <h1 className='text-2xl md:text-4xl font-bold text-center uppercase text-gray-900 mt-10 mb-3'>
        Nhà đang bán
      </h1>
      <Grid className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        <ProductGridItems products={homepageItems} />
      </Grid>
    </div>
  )
}
