import React from 'react'
import PostShare from './postShare/PostShare'
import "./Post.css"
import PostFeed from './postfeed/PostFeed'

function Post() {
  return (
    <div className='Post'>
      <PostShare/>
      <PostFeed/>
    </div>
  )
}

export default Post
