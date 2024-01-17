import React from 'react'

function Button({lable}) {
  return (
    <div>
         <button className="btn bg-blue text-light fw-light my-2 fw-bold">{lable}</button>
    </div>
  )
}

export default Button