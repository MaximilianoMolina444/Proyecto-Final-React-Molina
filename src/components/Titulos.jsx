import React from 'react'

export default function Titulos({item}) {
    return (
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h1>{item.text}</h1>
              </div>
          </div>
      </div>
    )
}
