import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Error = () => {
  return (
    <div>{[      
      'danger'     
    ].map((info) => (
      <Alert key={info} variant={info}>
        Error! Pagina o producto no encontrado
      </Alert>
    ))} </div>
  )
}

export default Error