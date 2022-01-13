import TopPostAdd from "../TopPostAdd/TopPostAdd"

import {
  useState,
  useEffect
} from "react";
import { getLocalItems } from "../../Helper/Localstorage";
import Post from "./Post";
const PostList =()=>{

  const [feedlistdata, setfeedlist] = useState(getLocalItems())
  

  useEffect(() => {
   localStorage.setItem("feed", JSON.stringify(feedlistdata))
 }, [feedlistdata])

  return<>
    <div className="col-md-6 gedf-main">

               
             <TopPostAdd setfeedlist={setfeedlist}></TopPostAdd>

{
  (feedlistdata)?
      feedlistdata.map((item, index) => {
        return <Post key={index} data={item}></Post>

      })

      : <><h5>No Post Available</h5></>
}

                
             

             

            </div>
  </>
}

export default PostList