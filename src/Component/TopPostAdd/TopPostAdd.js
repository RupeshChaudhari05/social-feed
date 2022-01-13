import './TopPostAdd.css'
import {
  React,
  useState,
  useEffect
} from 'react'
import Modal from 'react-bootstrap/Modal'
import {
 BsFillPencilFill, BsFillPatchQuestionFill, BsFillBarChartFill, BsFillCalendarCheckFill, BsFillGeoAltFill, BsFileImage, BsFileExcel
} from "react-icons/bs";
import Form from 'react-bootstrap/Form'
import { getLocalItems } from "../../Helper/Localstorage";






const TopPostAdd=({setfeedlist})=>{

  const [show, setShow] = useState(false)
const [image, setImage] = useState([])
const [imageURL, setImageURL] = useState([])

//const [FeedData, setFeedData] = useState(getLocalItems())

// form fields
const [postData, setPostData] = useState('')
const [tags, setTags] = useState({
  trietment:false,
  Lifestyle:false,
  Lifestyle:false,
  dite: false,
  news:false,
})




const onchangeTretment = ()=>{
 
  setTags({ ...tags,
    trietment: !tags.trietment
  })

  //console.log(tags);
}

const onchangeSymptms = ()=>{
 setTags({
         ...tags,
   symptoms: !tags.symptoms
 })

 //console.log(tags);
}
const onchangeLifestyle = ()=>{
 setTags({
   ...tags,
   Lifestyle: !tags.Lifestyle
 })
}
const onchangeDiet = ()=>{
 setTags({
   ...tags,
    dite: !tags.dite
 })
}
const onchangeNews = ()=>{
 setTags({
         ...tags,
   news: !tags.news
 })
}


useEffect(() => {
  if(image.length<1) return;
  const newImageURLs = [];
  image.forEach(images=>newImageURLs.push(URL.createObjectURL(images)))
  setImageURL(newImageURLs);
  console.log("useeffect on add");
  // localStorage.setItem("feed", JSON.stringify(FeedData))

  
 
}, [image]);
function onImageChange(e){
  setImage([...e.target.files])
}


function resetImage(){
setImage([])
setImageURL([])
}


const saveFormData = (e)=>{
  e.preventDefault();
  
//console.log(postData)
   // console.log(tags)

    let checkArray = [];
    for (var key in tags) {
      if (tags[key] === true) {
        checkArray.push(key);
      }
    }

    if(checkArray.length === 0){
      alert("At list any one tag You have to select")
      return false
    }
  
   
    const data = {
      post: postData,
      image: imageURL[0] ? imageURL[0] : "https://picsum.photos/600/350",
      tags: checkArray.toString()
    }
 
setfeedlist(previousList => [
                    ...previousList,
                    data
                ])
setImageURL([])
    setShow(false)
 
   
}



return<>

<div className='card'>

<div className = 'py-3 textcolor size-22' >
  <lable className='mx-2' onClick={() => setShow(true)}> <BsFillPencilFill className='mx-2'></BsFillPencilFill><label> Post </label></lable >  |  
  <lable className='mx-2' onClick={() => setShow(true)}> <BsFillPatchQuestionFill className='mx-2'> </BsFillPatchQuestionFill><label> Ask quations </label > </lable >  |  
  <lable className='mx-2' onClick={() => setShow(true)}> <BsFillBarChartFill className='mx-2'> </BsFillBarChartFill><label> Poll </label > </lable>  |  
  <lable className='mx-2' onClick={() => setShow(true)}> <BsFillCalendarCheckFill className='mx-2'> </BsFillCalendarCheckFill><label> Event </label > </lable>
</div>
<div className='row mx-2 py-2'>
  <Form Form onClick = {
    () => setShow(true)
  } >
  <Form.Group className = "mb-3">
    <Form.Control type="text" placeholder="Whats on Your Mind?" />
  </Form.Group>
  </Form>
</div>


</div>


<div className='py-3'>
  <button type="button" class="btn btn-outline-success m-2">All Posts</button>
  <button type="button" class="btn btn-outline-success m-2">News</button>
  <button type="button" class="btn btn-outline-success m-2">Diet</button>
  <button type="button" class="btn btn-outline-success m-2">Lifestyle</button>
  <button type="button" class="btn btn-outline-success m-2">Symptons</button>
  <button type="button" class="btn btn-outline-success m-2">Tretment</button>
  
</div>




      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


<div className='card'>

<div className = 'py-3 textcolor size-22' >
  <lable className='mx-2'> <BsFillPencilFill className='mx-2'></BsFillPencilFill><label> Post </label></lable >  |  
  <lable className='mx-2'> <BsFillPatchQuestionFill className='mx-2'> </BsFillPatchQuestionFill><label> Ask quations </label > </lable >  |  
  <lable className='mx-2'> <BsFillBarChartFill className='mx-2'> </BsFillBarChartFill><label> Poll </label > </lable>  |  
  <lable className='mx-2'> <BsFillCalendarCheckFill className='mx-2'> </BsFillCalendarCheckFill><label> Event </label > </lable>
</div>


</div>

<div className='row py-2'>
 <form onSubmit={saveFormData}>
    <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setPostData(e.target.value)}></textarea>
  </div>

  <div className='py-3'>
  
  {
  
    imageURL.map(imageSrc => <><div id="box">
  <div onClick={resetImage}>
   <BsFileExcel></BsFileExcel>
  </div><img src = { imageSrc } height={150} width={150} alt='' /></div></>) 
  }
  

      
  </div>

  <div className='size-11 flot-r'> 
  <label className="textend "><b><BsFillGeoAltFill></BsFillGeoAltFill> </b> </label> 
  <label className=''><b><BsFileImage></BsFileImage><input type="file" accept="image/*" onChange={onImageChange} style={{"display": "none"}} /></b></label>
  </div>

  <div className='py-3 appColor'>
    <label>Add topics that describe your post</label>
   <div div class = "form-group py-3" >
<input type="checkbox" class="btn-check" name="tags" id="success-outlined" autocomplete="off" onChange={onchangeNews} checked={tags.news} />
<label class="btn btn-outline-success m-2" for="success-outlined">News</label>

<input type="checkbox" class="btn-check" name="tags" id="success-outlined1" autocomplete="off"  onChange={onchangeDiet} checked={tags.dite} />
<label class="btn btn-outline-success m-2" for="success-outlined1">Diet</label>

<input type="checkbox" class="btn-check" name="tags" id="success-outlined2" autocomplete="off"  onChange={onchangeLifestyle} checked={tags.Lifestyle}  />
<label class="btn btn-outline-success m-2" for="success-outlined2">Lifestyle</label>

<input type="checkbox" class="btn-check" name="tags" id="success-outlined3" autocomplete="off"  onChange={onchangeSymptms} checked={tags.symptons} />
<label class="btn btn-outline-success m-2" for="success-outlined3">Symptoms</label>

<input type="checkbox" class="btn-check" name="tags" id="success-outlined4" autocomplete="off"  onChange={onchangeTretment} checked={tags.trietment} />
<label class="btn btn-outline-success m-2" for="success-outlined4">Tretment</label>

</div>

<hr></hr>
<div div className = 'size-19 flot-r' >
  <button type='submit' className='btn btn-success'>POST</button>
</div>


  </div>
 </form>


</div>




        </Modal.Body>
      </Modal>
               
</>
}

export default TopPostAdd