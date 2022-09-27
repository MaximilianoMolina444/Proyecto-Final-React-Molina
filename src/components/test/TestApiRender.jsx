import React, { useState, useEffect }from 'react'

export default function TestApiRender({actividad}) {
    return (
        <div>
           <div>
      {actividad.key ? (
        <div>
          <p>{actividad.activity}</p>
        </div>
      ) : (
        <p>"loading"</p>
      )}
    </div> 
        </div>
    )
}
