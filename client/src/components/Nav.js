import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <div className='navContainer'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/addMovie'>Add A Movie</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav;