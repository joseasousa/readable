import React from 'react'
import {} from 'react-materialize'

const Main = ({ data: {loading, error, allCategorieses} }) => (
  <div>
    oi
    {!loading && (
       allCategorieses.map(ca => <h1>{ca.name}</h1>)
      )}
  </div>
)

export default Main
