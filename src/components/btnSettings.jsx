/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BtnSettings() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.82 22H10.18C9.95194 22 9.73071 21.9221 9.55301 21.7792C9.37531 21.6362 9.25181 21.4368 9.20301 21.214L8.79601 19.33C8.25306 19.0921 7.73824 18.7946 7.26101 18.443L5.42401 19.028C5.20657 19.0973 4.97196 19.0902 4.75913 19.0078C4.5463 18.9254 4.36806 18.7727 4.25401 18.575L2.43001 15.424C2.31715 15.2261 2.27479 14.9958 2.30985 14.7708C2.34491 14.5457 2.45532 14.3392 2.62301 14.185L4.04801 12.885C3.9832 12.2961 3.9832 11.7019 4.04801 11.113L2.62301 9.816C2.45508 9.66177 2.34452 9.45507 2.30946 9.22978C2.27439 9.00449 2.3169 8.77397 2.43001 8.576L4.25001 5.423C4.36406 5.22532 4.5423 5.07259 4.75513 4.99019C4.96796 4.90778 5.20257 4.90066 5.42001 4.97L7.25701 5.555C7.50101 5.375 7.75501 5.207 8.01701 5.055C8.27001 4.913 8.53001 4.784 8.79601 4.669L9.20401 2.787C9.25258 2.5642 9.37584 2.36469 9.55335 2.22155C9.73087 2.07841 9.95197 2.00024 10.18 2H13.82C14.048 2.00024 14.2691 2.07841 14.4467 2.22155C14.6242 2.36469 14.7474 2.5642 14.796 2.787L15.208 4.67C15.7503 4.90927 16.2649 5.20668 16.743 5.557L18.581 4.972C18.7983 4.90292 19.0327 4.91017 19.2453 4.99256C19.4579 5.07495 19.636 5.22753 19.75 5.425L21.57 8.578C21.802 8.985 21.722 9.5 21.377 9.817L19.952 11.117C20.0168 11.7059 20.0168 12.3001 19.952 12.889L21.377 14.189C21.722 14.507 21.802 15.021 21.57 15.428L19.75 18.581C19.636 18.7787 19.4577 18.9314 19.2449 19.0138C19.0321 19.0962 18.7974 19.1033 18.58 19.034L16.743 18.449C16.2661 18.8003 15.7516 19.0975 15.209 19.335L14.796 21.214C14.7472 21.4366 14.6239 21.6359 14.4464 21.7788C14.2689 21.9218 14.0479 21.9998 13.82 22V22ZM11.996 8C10.9351 8 9.91772 8.42143 9.16758 9.17157C8.41743 9.92172 7.99601 10.9391 7.99601 12C7.99601 13.0609 8.41743 14.0783 9.16758 14.8284C9.91772 15.5786 10.9351 16 11.996 16C13.0569 16 14.0743 15.5786 14.8244 14.8284C15.5746 14.0783 15.996 13.0609 15.996 12C15.996 10.9391 15.5746 9.92172 14.8244 9.17157C14.0743 8.42143 13.0569 8 11.996 8V8Z" fill="#67B74C" />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}