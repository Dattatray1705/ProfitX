import React from 'react'
import { Link } from 'react-router-dom';

function NotfoundPage() {
  return (
     <div className='container p-5 mb-5'>
        <div className='row text-center'>
          <i className="fa-solid fa-triangle-exclamation text-warning fs-1 mb-3"></i>
        <h1 className='mt-5'>404 Not Found</h1>
        <p>Sorry , the page are not exist. Plaese try again.</p>
        </div>





    </div>
  )
}

export default NotfoundPage;