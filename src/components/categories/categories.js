import React from 'react'
import {Collection, CollectionItem} from 'react-materialize'

const Main = ({
  data: {
    loading,
    error,
    allCategorieses
  } }) => (
    <div>

      {!loading && (
      <Collection>
        {allCategorieses.map(ca =>
          <CollectionItem key={ca.name}>{ca.name}</CollectionItem>
        )}
      </Collection>
      )}

    </div>
)

export default Main
