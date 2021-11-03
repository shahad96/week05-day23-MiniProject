import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setEle,setIndex} from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import { useHistory } from "react-router-dom";



function Video({ele,index}){
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => {
        
        return {
          ele: state.watchLaterAndvideoVideos.ele,
          index: state.watchLaterAndvideoVideos.index
        };
      });
      function set(){
        const action = setEle(ele);
        dispatch(action);
        const action2 = setIndex(index);
        dispatch(action2);
        history.push(`/Deteals/${index}`)
      }
 
    return(
        <div onClick={set}>
            <img src={ele.snippet.thumbnails.medium.url}/>
            <p>{ele.snippet.title}</p>
        </div>

    )
}
export default Video;