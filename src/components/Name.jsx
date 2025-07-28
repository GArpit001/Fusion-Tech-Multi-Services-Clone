import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

const Name = () => {
    const navigation = useNavigate()
    const location = useLocation()
    let fullName = location.pathname

    const remove = fullName.split("/").join('')
    const findName = remove.split("-")
    const firstLetter = findName.map((val) => {
        return val.charAt(0).toUpperCase()
    })
    const balance = findName.map((val) => {
        return val.slice(1)
    })
    const mixLetter = firstLetter.map((element, index) => {
        return element + balance[index]
    })
    const finalWorld = mixLetter.join(" ")

    useEffect(() => {
        if (location.pathname === "/") {
            navigation("/")
        }
    }, [location.pathname, navigation])

    return (
        <div className='bg-[#141414] w-full h-64 sm:h-80 md:h-96 lg:h-[420px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16'>
            <div>
                <ul className='text-white list-none flex gap-3 sm:gap-5 items-center'>
                    <Link className='hover:text-red-700 transition-all duration-500 cursor-pointer text-sm sm:text-base' to="/" >
                        HOME
                    </Link>
                    <li className='text-gray-500'>|</li>
                    <li className='text-red-700 text-sm sm:text-base'>{finalWorld}</li>
                </ul>

                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mt-3 sm:mt-4'>
                    {finalWorld}
                </h1>
            </div>
        </div>
    )
}

export default Name