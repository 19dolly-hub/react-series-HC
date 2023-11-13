// Step :1 i react-router-dom | Components
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link
                    to='/'
                    className='flex items-center'>
                        LOGO
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                        to='#'
                        >
                            Log In
                        </Link>
                        <Link
                        to='#'>
                            Get Started
                        </Link>
                    </div>

                    <div 
                    className="Hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                    id='mob-menu-2'>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                className={({isActive}) => 
                                `${isActive ? "text-blue-500" : "text-gray-700"} hover:text-lg`}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                className={({isActive}) => 
                                `${isActive ? "text-blue-500" : "text-gray-700"} hover:text-lg`}
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/github"
                                className={({isActive}) => 
                                `${isActive ? "text-blue-500" : "text-gray-700"} hover:text-lg`}
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header