import { BsFillChatSquareFill, BsFillOctagonFill, BsSearch, BsFillFileEarmarkRichtextFill, BsFillDashCircleFill, BsUmbrella } from "react-icons/bs";
import './NavBar.css';
const Navbar = () => {
  return <>
    <div className="container"
      style={
        {
          "backgroundColor": "#1eb090",
          "color":"#fff",
          "padding":"3px"
        }
      } >


      <nav className="navbar navbar-default" role="navigation">
       
     
        <label className="navbar-brand"><BsUmbrella></BsUmbrella> HealthNest</label>
       
     
        <ul className="nav navbar-left">
          <li className="mx-2"><BsFillFileEarmarkRichtextFill></BsFillFileEarmarkRichtextFill> Feed</li>
          <li><BsFillDashCircleFill></BsFillDashCircleFill> Community</li>
          </ul>
          <ul className="nav navbar-right">
          <li><BsSearch></BsSearch></li>
          <li className="px-3"><BsFillOctagonFill></BsFillOctagonFill></li>
          <li className="mx-1"><BsFillChatSquareFill></BsFillChatSquareFill></li>

            
          </ul>
     
      </nav>

















   
    </div>
  </>
}

export default Navbar;