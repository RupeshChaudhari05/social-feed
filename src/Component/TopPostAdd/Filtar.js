import { getLocalItems } from "../../Helper/Index";
const Filter = ({ setsearch, filterMyData})=>{


  return(<>
    <div className='py-3'>
      <button type="button" className="btn btn-outline-success m-2" onClick={() => setsearch('') }>All Posts</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={()=> filterMyData("News") }>News</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={() => filterMyData("Diet") }>Diet</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={() => filterMyData("Lifestyle") }>Lifestyle</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={() => filterMyData("Symptons") }>Symptons</button>
      <button type="button" className="btn btn-outline-success m-2" onClick={() => filterMyData("Treatment") }>Treatment</button>
    </div>
  </>)
}

export default Filter