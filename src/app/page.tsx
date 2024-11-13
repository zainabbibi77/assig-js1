import Link from 'next/link'
import React from 'react'


function Home() {
  return (
    <div>
      <div>
        Assignment of Dynamic Routing{""} <br />
        <h1>List of Countries</h1>
        <ul>
        <li><Link href={'/country/pakistan'}><u>Pakistan</u></Link></li>
       <li><Link href={'/country/india'}><u>India</u></Link></li>
        <li><Link href={'/country/turkey'}><u>Turkey</u></Link></li>
        <li><Link href={'/country/china'}><u>China</u></Link></li>
        <li><Link href={'/country/norway'}><u>Norway</u></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home