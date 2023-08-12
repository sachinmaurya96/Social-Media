import React from 'react'
import "./PostFeed.css"
import { PostsData } from '../../../../Data/PostData'
import Feed from '../feed/Feed'
function PostFeed() {
  return (
    <div className='postFeed'>
        {
            PostsData.map((post, id)=>{
                return <Feed data={post} id={id} key={id}/>
            })
        }
    </div>
  )
}

export default PostFeed
