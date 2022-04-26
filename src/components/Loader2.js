import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader2 = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner
        animation='grow'
        role='status'
        style={{
          width: '20px',
          height: '20px',
          margin: 'auto',
          color: 'grey',
          display: 'block',
        }}
      ></Spinner>
    </div>
  )
}
export default Loader2
