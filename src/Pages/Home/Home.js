import LeftFeed from '../../Component/LeftFeed/LeftFeed';
import Navbar from '../../Component/NavBar/Navbar';
import PostList from '../../Component/PostList/PostList';
import RightFeed from '../../Component/RightFeed/RightFeed';
import './Home.css';
import {
  useState
} from "react";

const Home = () => {

  return <>
    <div className='bgcolor' >
      <Navbar></Navbar>
      <div className="container gedf-wrapper">
        <div className="row py-3">

          <LeftFeed></LeftFeed>

          <PostList></PostList>

          <RightFeed></RightFeed>



        </div>
      </div>
    </div>
  </>
}

export default Home;