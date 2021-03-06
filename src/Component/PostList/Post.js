
import {
  BsThreeDotsVertical,
  BsFillGeoAltFill
} from "react-icons/bs";


const Post = ({ deltePost, data }) => {

  const { id, post, image , tags, datetime } = data

  return (
    <>
      <div className="card py-3">
        <div div className="px-3 pb-2 size-9" >
          <label><b>TEST TOPIC - {tags.toString().toUpperCase()}</b></label>
        </div>
        <label className="size-9 float-right textend px-3"><b>10 days Ago</b></label>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <div div className="mr-2 px-2" >
              <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt={datetime} />
            </div>
            <div div className="ml-2" >
              <div className="h5 m-0">Patient</div>
              <div className="h7 textcolor size-12"><b>DIGNOSED RECENTLY</b></div>
            </div>
          </div>

          <div className="pr-5">
            <div className="dropdown-container float-right" tabIndex='-1' >
              <BsThreeDotsVertical></BsThreeDotsVertical>
              <div className="dropdown p-2">
                <div onClick={() => deltePost(id)} className="size-10">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            {
              post
            }
          </p>
          <img alt={datetime} src={image} className="img-fluid"></img>
          <div className="size-10 py-2 appColor"><BsFillGeoAltFill></BsFillGeoAltFill> <label><b>Ratnagiri,Maharashtra,India</b></label></div>
        </div>

      </div>
    </>)


}



export default Post