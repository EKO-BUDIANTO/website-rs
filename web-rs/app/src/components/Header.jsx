import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="header">
        <nav>
            <div className="logo"><Link href="/">LOGO</Link></div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">about</Link>
            </div>
        </nav>

    </header>
  )
}

export default Header