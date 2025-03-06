import { cn } from '@/lib/utils'
import { HomeIcon } from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'

export default function LogoIcon(props: IconProps) {
  return (
    <HomeIcon
      {...props}
      className={cn('h-4 w-4 fill-black dark:fill-white', props.className)}
    />
  )
}
