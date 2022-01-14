import { Suspense, lazy } from "react";
import LeftFeed from '../../Component/LeftFeed/LeftFeed';
import Navbar from '../../Component/NavBar/Navbar';
import RightFeed from '../../Component/RightFeed/RightFeed';
import './Home.css';
const PostList = lazy(() => import("../../Component/PostList/PostList"));


const Home = () => {

  return <>
    <div className='bgcolor' >
      <Navbar></Navbar>
      <div className="container gedf-wrapper">
        <div className="row py-3">

          <LeftFeed></LeftFeed>
          <Suspense fallback={<div>Loading...</div>}>
          <PostList></PostList>
          </Suspense>
          <RightFeed></RightFeed>

        </div>
      </div>
    </div>
  </>
}

export default Home;