import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { newsletters } from '../data/archive'

const navigation = [
  { name: 'Past editions', href: '/archive' },
  { name: 'Get in touch', href: 'mailto:haldonviews@gmail.com' },
]

export const getStaticProps = async () => {
  return {
    props: {
      newsletters,
    },
  }
}

export default function Archive({ newsletters }) {
  return (
    <div className="bg-gray-100">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              {({ open }) => (
                <>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                          <a href="/" className="font-bold text-2xl text-red-500" style={{fontFamily: 'Forte, sans-serif'}}>
                            Haldon Views
                          </a>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div className="font-bold text-2xl text-red-500" style={{fontFamily: 'Forte, sans-serif'}}>
                            Haldon Views
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Download</span>{' '}
                  <span className="block text-red-600 xl:inline">past editions</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Now you can download past editions of <span className="text-red-400 font-bold" style={{fontFamily: 'Forte, sans-serif'}}>Haldon Views</span> directly from the web!
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://i.imgur.com/0IC4WNM.jpg"
            alt="Kenn Church"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {newsletters.map((item) => (
              <li key={item.filePath} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex items-center justify-between">
                <p className="font-bold text-lg">{item.name}</p>
                <a
                  href={`/editions/${item.filePath}.pdf`}
                  className="text-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-3 md:text-base md:px-5"
                >
                  Download edition
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto p-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-lg text-gray-400">Provided by <a className="font-semibold text-gray-500 hover:text-gray-900" href="https://www.moducate.app">Moducate</a>. Made with &#10084;&#65039; in Exeter.</p>
        </div>
      </footer>
    </div>
  )
}
