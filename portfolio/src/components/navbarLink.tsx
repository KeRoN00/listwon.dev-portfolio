import React from 'react'

type Props = {
    text: string
}

const NavbarLink = (props: Props) => {
  return (
    <a href="/" className='font-mplus tracking-wide font-bold'>{props.text}</a>
  )
}

export default NavbarLink