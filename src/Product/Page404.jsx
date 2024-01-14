import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
   <h1>hey,</h1>
       <h1>Oops! Page Not Found</h1>
    <p>We're sorry, but the page you're looking for doesn't exist.</p>

    <p>Here are a few things you can try:</p>
    <ul>
        <li>Check the URL for typos and try again.</li>
        <li>Go back to the  <Link to="/"> Go To Home Page</Link>.</li>
        <li><Link to="/help"> Contact us</Link> for assistance.</li>
    </ul>
     
    </>
  )
}

export default Page404
