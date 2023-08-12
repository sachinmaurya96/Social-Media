import React, { useRef, useState } from 'react'
import "./PostShare.css"
import profileImg from "../../../../img/profileImg.jpg"
import { BiImageAdd,BiPlayCircle, BiLocationPlus,BiCross } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
function PostShare() {
    const [image,setImage] = useState(null)
    const imgageRef = useRef()

    const onImageChange =(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setImage({
                image:URL.createObjectURL(img)
            })
        }
    }
  return (
    <div className='postShare'>
      <img src={profileImg} alt="profile" />
      <div>
        <input type="text"
        placeholder="what's happining" />
         <div className="postOptions">
            <div className="option"
            style={{color:"var(--photo)"}}
            onClick={()=>imgageRef.current.click()}
            >
                <BiImageAdd style={{fontSize:'25px'}}/>
                Photo
            </div>
            <div className="option"
             style={{color:"var(--video)"}}
            >
                <BiPlayCircle  style={{fontSize:'25px'}}/>
                Video
            </div>
            <div className="option" 
             style={{color:"var(--location)"}}
            >
                <BiLocationPlus style={{fontSize:'25px'}}/>
                Location
            </div>
            <div className="option"
             style={{color:"var(--shedule)"}}
            >
                <SlCalender style={{fontSize:'25px'}}/>
                Shwdule
            </div>
            <button className='button ps-button' >Share</button>
           <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imgageRef} onChange={onImageChange}/>
           </div>
        </div>
        {image && (
            <div className="previewImage">
                <RxCross2 className='svg' onClick={()=>setImage(null)}/>
                <img src={image.image} alt="" />
            </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
