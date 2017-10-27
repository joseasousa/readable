import React from 'react'
import {Collection, CollectionItem} from 'react-materialize'

const Posts = ({
  data: {
    loading,
    error,
    allPosts
  } }) => (
    <div>

      {!loading && (
      <Collection>
        {allPosts.map(po =>
          <CollectionItem key={po.id}>{po.title}</CollectionItem>
        )}
      </Collection>
      )}

    </div>
)

export default Posts
