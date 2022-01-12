import './TopPostAdd.css'
import {
  React,
  useState
} from 'react'
import Modal from 'react-bootstrap/Modal'
import {
  BsThreeDotsVertical
} from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown'




const TopPostAdd=()=>{

  const [show, setShow] = useState(false)

  const [dropdownOpen, setdropdownOpen] = useState(false)
return<>
     <div className="card gedf-card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a publication</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    <label className="sr-only" for="message">post</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile"/>
                                        <label className="custom-file-label" for="customFile">Upload image</label>
                                    </div>
                                </div>
                                <div className="py-4"></div>
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between">
                            <div className="btn-group">
                             <buton  onClick={() => setShow(true)} className='btn'>Large modal</buton>
                                <buton type="submit" className="btn btn-primary">share</buton>
                            </div>


  <div class="dropdown-container" tabindex="-1">
    <BsThreeDotsVertical></BsThreeDotsVertical>
    <div class="dropdown">
      <a href="#"><div>Delete</div></a>
     
    </div>
  </div>
                            

                        </div>
                    </div>
                </div>


      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
               
</>
}

export default TopPostAdd