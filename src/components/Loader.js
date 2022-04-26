import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner
        animation='border'
        role='status'
        style={{
          width: '20px',
          height: '20px',
          margin: 'auto',
          color: 'blue',
          display: 'block',
        }}
      >
        <span className='sr-only'>Loading</span>
      </Spinner>
      <h6 style={{ marginTop: '10px' }}>لطفا منتظر بمانید</h6>
    </div>
  )
}
export default Loader
