import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <link to ='/'>BotCollection</link>
            </li>
            <li>
                <link to ='/army'>BotArmy</link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar