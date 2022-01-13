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
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filtar';

const TopPostAdd = ({ setfeedlist, filterMyData, setsearch }) => {

  const [show, setShow] = useState(false)
  const [image, setImage] = useState([])
  const [imageURL, setImageURL] = useState([])

  // form fields
  const [postData, setPostData] = useState('')
  const [tags, setTags] = useState({
    treatment: false,
    Lifestyle: false,
    symptons: false,
    diet: false,
    news: false,
  })

  const toggelTags = (name) => {
    console.log("toggle", name)
    setTags({
      ...tags,
      [name]: !tags[name]
    })
  }

  useEffect(() => {
    if (image.length < 1) return;
    const newImageURLs = [];
    image.forEach(images => newImageURLs.push(URL.createObjectURL(images)))
    setImageURL(newImageURLs);
  }, [image]);

  function onImageChange(e) {
    setImage([...e.target.files])
  }

  function resetImage() {
    setImage([])
    setImageURL([])
  }

  const saveFormData = (e) => {
    e.preventDefault();
    let checkArray = [];
    for (var key in tags) {
      if (tags[key] === true) {
        checkArray.push(key);
      }
    }
    if (checkArray.length === 0) {
      alert("At list any one tag You have to select")
      return false
    }

    const d = new Date();
    let datetime = d.toUTCString();

    const data = {
      id: uuidv4(),
      post: postData,
      image: imageURL[0] ? imageURL[0] : "https://picsum.photos/600/350",
      tags: checkArray,
      datetime: datetime
    }

    setfeedlist(previousList => [
      ...previousList,
      data
    ])
    setImageURL([])
    setShow(false)
    setTags({
      trietment: false,
      Lifestyle: false,
      symptons: false,
      diet: false,
      news: false,
    })
  }

  return (
    <>
      <div className='card'>
        <div className='py-3 textcolor size-22' >
          <label className='mx-2' onClick={() => setShow(true)}> <BsFillPencilFill className='mx-2'></BsFillPencilFill>  Post </label >  |
          <label className='mx-2'> <BsFillPatchQuestionFill className='mx-2'> </BsFillPatchQuestionFill> Ask quations </label >  |
          <label className='mx-2'> <BsFillBarChartFill className='mx-2'> </BsFillBarChartFill> Poll  </label>  |
          <label className='mx-2'> <BsFillCalendarCheckFill className='mx-2'> </BsFillCalendarCheckFill> Event  </label>
        </div>
        <div className='row mx-2 py-2'>
          <Form onClick={
            () => setShow(true)
          } >
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Whats on Your Mind?" />
            </Form.Group>
          </Form>
        </div>
      </div>
      <Filter filterMyData={filterMyData} setsearch={setsearch}></Filter>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='card'>
            <div className='py-3 textcolor size-22' >
              <label className='mx-2'> <BsFillPencilFill className='mx-2'></BsFillPencilFill><label> Post </label></label >  |
              <label className='mx-2'> <BsFillPatchQuestionFill className='mx-2'> </BsFillPatchQuestionFill><label> Ask quations </label > </label >  |
              <label className='mx-2'> <BsFillBarChartFill className='mx-2'> </BsFillBarChartFill><label> Poll </label > </label>  |
              <label className='mx-2'> <BsFillCalendarCheckFill className='mx-2'> </BsFillCalendarCheckFill><label> Event </label > </label>
            </div>
          </div>
          <div className='row py-2'>
            <form onSubmit={saveFormData}>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setPostData(e.target.value)} value={postData}></textarea>
              </div>

              <div className='py-3'>
                {
                  imageURL.map((imageSrc, index) => <div id="box" key={index}>
                    <div onClick={resetImage}>
                      <BsFileExcel></BsFileExcel>
                    </div><img src={imageSrc} height={150} width={150} alt='' /></div>)
                }
              </div>
              <div className='size-11 flot-r'>
                <label className="textend "><b><BsFillGeoAltFill></BsFillGeoAltFill> </b> </label>
                <label className=''><b><BsFileImage></BsFileImage><input type="file" accept="image/*" onChange={onImageChange} style={{ "display": "none" }} /></b></label>
              </div>
              <div className='py-3 appColor'>
                <label>Add topics that describe your post</label>
                <div className="form-group py-3" >
                  <input type="checkbox" className="btn-check" name="tags" id="success-outlined" autoComplete="off" onChange={() => toggelTags("news")} checked={tags.news} />
                  <label className="btn btn-outline-success m-2" htmlFor="success-outlined">News</label>

                  <input type="checkbox" className="btn-check" name="tags" id="success-outlined1" autoComplete="off" onChange={() => toggelTags("diet")} checked={tags.dite} />
                  <label className="btn btn-outline-success m-2" htmlFor="success-outlined1">Diet</label>

                  <input type="checkbox" className="btn-check" name="tags" id="success-outlined2" autoComplete="off" onChange={() => toggelTags("Lifestyle")} checked={tags.Lifestyle} />
                  <label className="btn btn-outline-success m-2" htmlFor="success-outlined2">Lifestyle</label>

                  <input type="checkbox" className="btn-check" name="tags" id="success-outlined3" autoComplete="off" onChange={() => toggelTags("symptons")} checked={tags.symptons} />
                  <label className="btn btn-outline-success m-2" htmlFor="success-outlined3">Symptoms</label>

                  <input type="checkbox" className="btn-check" name="tags" id="success-outlined4" autoComplete="off" onChange={() => toggelTags("treatment")} checked={tags.treatment} />
                  <label className="btn btn-outline-success m-2" htmlFor="success-outlined4">Treatment</label>
                </div>
                <hr></hr>
                <div className='size-19 flot-r' >
                  <button type='submit' className='btn btn-success'>POST</button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

    </>)
}

export default TopPostAdd