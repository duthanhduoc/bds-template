import Link from 'next/link'
import { Suspense } from 'react'
import MobileMenu from './mobile-menu'
import { menu, MenuItem } from '@/data'
import LogoSquare from '@/components/logo-square'

const { SITE_NAME } = process.env

export async function Navbar() {
  return (
    <nav className='relative flex items-center justify-between p-4 lg:px-6'>
      <div className='flex w-full items-center'>
        <div className='flex w-full md:w-1/3'>
          <Link
            href='/'
            prefetch={true}
            className='mr-2 flex w-full items-center md:w-auto lg:mr-6'
          >
            <LogoSquare />
            <div className='ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block'>
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className='hidden gap-6 text-sm md:flex md:items-center'>
              {menu.map((item: MenuItem) => (
                <li key={item.title} className='shrink-0'>
                  <Link
                    href={item.url}
                    prefetch={true}
                    className='text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className='block flex-none md:hidden'>
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
    </nav>
  )
}
