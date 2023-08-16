import React, { useEffect } from 'react'
import "./PostFeed.css"
// import { PostsData } from '../../../../Data/PostData'
import Feed from '../feed/Feed'
import { useSelector } from 'react-redux'
import { getTimeLinePostAsync, selectPostLoading, selectTimeLinePost } from '../../postSlice'
import { useDispatch } from 'react-redux'
function PostFeed() {
  const PostData = useSelector(selectTimeLinePost)
  const loading = useSelector(selectPostLoading)
  const dispatch = useDispatch()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("profile"))
   dispatch(getTimeLinePostAsync(user?.user.id))
  },[loading])

  return (
    <div className='postFeed'>
        {
            PostData?.map((post, id)=>{
                return <Feed data={post} id={id} key={id}/>
            })
        }
    </div>
  )
}

export default PostFeed
