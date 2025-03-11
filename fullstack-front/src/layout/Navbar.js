import React from 'react'
import { Link } from 'react-router-dom';
export default function  Navbar() {

  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">

              <div className="container-fluid">
                <Link to="/#">Home</Link>
                  <button 
                  className="navbar-toggler" t
                  ype="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                    
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </div>

          </nav>

    </div>
  )
}
