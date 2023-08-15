import React, { useRef, useState } from "react";
import "./PostShare.css";
import profileImg from "../../../../img/profileImg.jpg";
import {
  BiImageAdd,
  BiPlayCircle,
  BiLocationPlus,
  BiCross,
} from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../auth/authSlice";
import { useDispatch } from "react-redux";
import { createPostAsync, selectPostLoading, uploadImgAsync } from "../../postSlice";
function PostShare() {
  
   
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const imgageRef = useRef();
  const user = JSON.parse(localStorage.getItem("profile"))
   
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const loading = useSelector(selectPostLoading)
  return (
    <div className="postShare">
      <img src={profileImg} alt="profile" />
      <form>
        <input type="text" placeholder="what's happining" 
          {...register("desc")}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imgageRef.current.click()}
          >
            <BiImageAdd style={{ fontSize: "25px" }} />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <BiPlayCircle style={{ fontSize: "25px" }} />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <BiLocationPlus style={{ fontSize: "25px" }} />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <SlCalender style={{ fontSize: "25px" }} />
            Shwdule
          </div>
          <button disabled={loading} className="button ps-button" onClick={handleSubmit((data)=>{
            const newPost = {
                userId:user.user.id,
                desc:data.desc,
            }
            if(image){
                const imgdata = new FormData()
                const fileName = Date.now() + image.name
                imgdata.append("name",fileName)
                imgdata.append("file",image)
                newPost.Image = fileName
                console.log(imgdata)
                try{
                    dispatch(uploadImgAsync(imgdata))
                }catch(err){
                    console.log(err)
                }
            }
            dispatch(createPostAsync(newPost))
          
           setImage(null)
           reset()
          })}>{loading?"Uploading..":"Share"}</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imgageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <RxCross2 className="svg" onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </form>
    </div>
  );
}

export default PostShare;
