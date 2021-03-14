import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Joke from '../components/joke/Joke'

function Category(props) {

  const { match: { params } } = props 

  const nextCategory = () => {
    const categories = [
      "misc",
      "programming",
      "dark",
      "pun",
      "spooky",
      "christmas",
    ];

    const currentIndex = categories.indexOf(params.category)
    let index;

    if (currentIndex < categories.length - 1) {
      index = currentIndex + 1
    } else if (currentIndex === categories.length - 1) {
      index = 0
    }
    const next = categories[index]

    return next
  }

  return (
    <main className='category container'>
      <nav className='nav-menu'>
        <ul>
          <li><Link to='/'><button>Home</button></Link></li>
          <li><Link to={`/categories/${nextCategory()}`}><button>Change Category</button></Link></li>
        </ul>
      </nav>

      <Joke category={params.category} />
    </main>
  )
}

export default Category
