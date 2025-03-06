'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { MenuItem } from '@/data'

export default function MobileMenu({ menu }: { menu: MenuItem[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname, searchParams])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label='Open mobile menu'
          className='flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white'
        >
          <HamburgerMenuIcon className='h-4 w-4' />
        </button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='flex flex-col bg-white p-0 dark:bg-black'
      >
        <SheetHeader>
          <SheetTitle className='hidden' />
          <div className='p-4 flex flex-col items-end'>
            {menu.length ? (
              <ul className='flex w-full flex-col items-end'>
                {menu.map((item: MenuItem) => (
                  <li
                    className='py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white text-right'
                    key={item.title}
                  >
                    <Link
                      href={item.url}
                      prefetch={true}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
