import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
        <h1>Welcome to rails-react</h1>
        <Link to='/greetings' className='link-to'>See Greetings</Link>
    </div>
  )
}

export default Home