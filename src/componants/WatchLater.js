import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Video from "./Video";

function WatchLater(){

    const state = useSelector((state) => {
        return {
          watch_later: state.watchLaterAndvideoVideos.watch_later
        };
      });
    return(
        <div>
            <Link to="/">back</Link>
            <div id="grid">
            {state.watch_later.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
          </div>
    );

}
export default WatchLater;