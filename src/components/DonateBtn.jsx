import React from 'react'

function DonateBtn({onClick}) {
  return (
    <button onClick={onClick} type="button" className="btn btn-success mt-3">Donate now</button>
  )
}

export default DonateBtn