import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Video from "./Video";
import { Nav } from 'react-bootstrap';

function WatchLater(){

    const state = useSelector((state) => {
        return {
          watch_later: state.watchLaterAndvideoVideos.watch_later
        };
      });
    return(
        <div>
            <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    <Nav.Link href="/">Back</Nav.Link>
    </Nav>
            <div id="grid">
            {state.watch_later.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
          </div>
    );

}
export default WatchLater;