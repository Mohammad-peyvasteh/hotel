import Link from "next/link"

const links=[
    {
        path:'/',
        pathname:'Home'
    },
    {
        path:'/',
        pathname:'Find Hotel'
    },
    {
        path:'/',
        pathname:'About Us'
    },
    {
        path:'/',
        pathname:'Contact Us'
    },
]

const Nav = (
{listStyles,containerStyles}
) => {
  return (
    <nav className={`${containerStyles}`}>
        <ul className={`${listStyles}`}>
            {
                links.map((item,index)=>{
                    return <li key={index}>
                        <Link href={item.path}>{item.pathname}</Link>
                    </li>
                })
            } 

        </ul>

    </nav>
  )
}

export default Nav