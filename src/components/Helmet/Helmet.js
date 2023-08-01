import React from 'react'

const Helmet = (props) => {
    document.title = 'LinkUs Furniture - ' + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet