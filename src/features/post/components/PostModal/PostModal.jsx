import React from 'react'
import { RxCross2 } from "react-icons/rx";
import PostShare from '../postShare/PostShare';
function PostModal({setOpen,open}) {
  return (
    <div className='profileForm postForm'>
       <div className="crossIcon">
       <RxCross2 onClick={()=>setOpen(!open)}/>
       </div>
       <PostShare/>
    </div>
  )
}

export default PostModal
