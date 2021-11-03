import { useDispatch, useSelector } from "react-redux";
import {setEle,setIndex} from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import { useHistory } from "react-router-dom";
import {Card} from 'react-bootstrap';




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
      <Card style={{ width: '18rem' }} onClick={set}>
  <Card.Img variant="top" src={ele.snippet.thumbnails.medium.url} />
  <Card.Body>
    <Card.Title>{ele.snippet.title}</Card.Title>
  </Card.Body>
</Card>

    )
}
export default Video;