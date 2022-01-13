
import {
  BsBookmark, BsFillTvFill, BsFillQuestionCircleFill, BsCalendarEvent

} from "react-icons/bs";

const LeftFeed = () => {

  return <>
 <div className="col-md-3">
                <div className="card py-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                                <div className="mr-2 px-2">
                                    <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">Patient</div>
                                    <div className="h7 textcolor size-12"><b>DIGNOSED RECENTLY</b></div>
                                </div>
                            </div>
                    </div>
                
                </div>

<hr></hr>

  <label className="size-10 textcolor-gray">Library</label>
          <div className="">

                <div className=""> 
                <div className = "size-12 p-1">
                 
                  <label className="baground-white p-2"><BsBookmark></BsBookmark></label> 
                  <label  className="m-2"><b>My Bookmark</b></label>
                </div>

                <div className= "size-12 p-1" >
                  <label className="baground-white p-2"><BsFillTvFill></BsFillTvFill></label> 
                  <label className="m-2"><b>News & Articles</b></label>
                </div>

  <div className= "size-12 p-1" >
                  <label className="baground-white p-2"><BsFillQuestionCircleFill></BsFillQuestionCircleFill></label> 
                  <label className="m-2"><b>FAQ's</b></label>
                </div>

  <div className= "size-12 p-1" >
                  <label className="baground-white p-2"><BsCalendarEvent></BsCalendarEvent></label> 
                  <label className="m-2"><b>News & Articles</b></label>
                </div>


                
                </div>



            </div>


</div>


           
    </>

}

export default LeftFeed