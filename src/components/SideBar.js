import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

function SideBar() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div>
        <button onClick={handleShow} className='menuButton'>
          <svg viewBox='0 0 24 24' width='30' height='30'>
            <path d='M5 3C3.895 3 3 3.895 3 5C3 6.105 3.895 7 5 7C6.105 7 7 6.105 7 5C7 3.895 6.105 3 5 3 z M 12 3C10.895 3 10 3.895 10 5C10 6.105 10.895 7 12 7C13.105 7 14 6.105 14 5C14 3.895 13.105 3 12 3 z M 19 3C17.895 3 17 3.895 17 5C17 6.105 17.895 7 19 7C20.105 7 21 6.105 21 5C21 3.895 20.105 3 19 3 z M 5 10C3.895 10 3 10.895 3 12C3 13.105 3.895 14 5 14C6.105 14 7 13.105 7 12C7 10.895 6.105 10 5 10 z M 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10 z M 19 10C17.895 10 17 10.895 17 12C17 13.105 17.895 14 19 14C20.105 14 21 13.105 21 12C21 10.895 20.105 10 19 10 z M 5 17C3.895 17 3 17.895 3 19C3 20.105 3.895 21 5 21C6.105 21 7 20.105 7 19C7 17.895 6.105 17 5 17 z M 12 17C10.895 17 10 17.895 10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19C14 17.895 13.105 17 12 17 z M 19 17C17.895 17 17 17.895 17 19C17 20.105 17.895 21 19 21C20.105 21 21 20.105 21 19C21 17.895 20.105 17 19 17 z' />
          </svg>
        </button>

        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.ssss
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

export default SideBar