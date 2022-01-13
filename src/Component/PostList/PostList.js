import {
  useState,
  useEffect
} from "react";
import TopPostAdd from "../TopPostAdd/TopPostAdd"
import { getLocalItems } from "../../Helper/Index";
import Post from "./Post";

const PostList = () => {

  const [feedlistdata, setfeedlist] = useState(getLocalItems())
  const [search, setsearch] = useState('')
  const [searchData, setsearchData] = useState([])
  useEffect(() => {
    localStorage.setItem("feed", JSON.stringify(feedlistdata))
  }, [feedlistdata])

  const deltePost = (postId) => {
    console.log(feedlistdata, postId)
    const deltedarray=feedlistdata.filter(item=> item.id !== postId)
    setfeedlist(deltedarray)
  }

  const filterMyData = (name) => {
    console.log(name)
    setsearch(name)
    const ee = feedlistdata.map((element) => {
      return { ...element, tags: element.tags.filter((item) => item.toLowerCase() === name.toLowerCase()) }
    }).filter(item => item.tags.length > 0)
    setsearchData(ee)
  }

  const filterdata = (search) ? searchData : feedlistdata
  const finaldata = filterdata.sort(function (a, b) {
    return new Date(b.datetime) - new Date(a.datetime);
  })

  return (
    <>
      <div className="col-md-6 gedf-main">
        <TopPostAdd setfeedlist={setfeedlist} filterMyData={filterMyData} setsearch={setsearch}></TopPostAdd>
        {
       
          finaldata.map((item, index) => {
            return <Post key={index} data={item} deltePost={deltePost}></Post>
          })
        }
      </div>
    </>)
}

export default PostList