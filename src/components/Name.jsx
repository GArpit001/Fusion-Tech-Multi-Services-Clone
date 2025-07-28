import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'

const Name = () => {

    const navigation = useNavigate()


    const refre = () => {
        useEffect(() => {
            navigation("/")
        })
    }



    const location = useLocation()
    // console.log(location.pathname)
    let fullName = location.pathname

    const remove = fullName.split("/").join('')

    const findName = remove.split("-")
    // const findName = fullName.split("-").join(" ").split("/").join("")
    // console.log(findName)


    const firstLetter = findName.map((val) => {
        return val.charAt(0).toUpperCase()
    })
    // console.log(firstLetter)

    const balance = findName.map((val) => {
        return val.slice(1)
    })
    // console.log(balance)

    const mixLetter = firstLetter.map((element, index) => {
        return element + balance[index];
    });

    // console.log(mixLetter);

    const finalWorld = mixLetter.join(" ")
    // console.log(finalWorld)



    return (
        <div className='bg-[#141414] w-full h-[420px] p-32 bgs'>

            <div className='' >

                <ul className='text-white list-none flex gap-5 '>
                    <Link className='hover:text-red-700 transition-all duration-500 cursor-pointer' to="/" onClick={refre} >HOME</Link>
                    <li>|</li>
                    <li className='text-red-700'>{finalWorld}</li>
                </ul>

                <h1 className='text-7xl text-white font-bold mt-3   '>
                    {finalWorld}
                </h1>

            </div>

        </div>
    )
}

export default Name