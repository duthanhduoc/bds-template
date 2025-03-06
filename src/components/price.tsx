import { cn } from '@/lib/utils'

const Price = ({
  amount,
  className,
  currencyCode = 'VND',
  currencyCodeClassName
}: {
  amount: number
  className?: string
  currencyCode?: string
  currencyCodeClassName?: string
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(amount)}`}
    <span className={cn('ml-1 inline', currencyCodeClassName)}>
      {currencyCode !== 'VND' ? `${currencyCode}` : ''}
    </span>
  </p>
)

export default Price
