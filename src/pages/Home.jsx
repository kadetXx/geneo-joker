import React from "react";
import { Link } from "react-router-dom";

import Joke from '../components/joke/Joke'

function Home() {
  const categories = [
    "Misc",
    "Programming",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  return (
    <main className="home container">
      <h3>Limit Category</h3>
      <nav className='nav-menu'>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/categories/${category.toLocaleLowerCase()}`}>
                <button>{category} </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Joke />
    </main>
  );
}

export default Home;
