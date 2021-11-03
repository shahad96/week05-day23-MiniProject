import { useDispatch, useSelector } from "react-redux";
import { setWatchLater } from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import { useHistory } from "react-router-dom";
import { Button ,Card} from 'react-bootstrap';

function Deteals(){
  const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => {
       
        
        return {
          ele: state.watchLaterAndvideoVideos.ele,
          index: state.watchLaterAndvideoVideos.index,
          videos: state.watchLaterAndvideoVideos.videos,
          watch_later: state.watchLaterAndvideoVideos.watch_later
        };
      });
      console.log(state.videos[state.index]);
      console.log(state.ele);
      let link= "https://www.youtube.com/embed/"+state.ele.id.videoId;

      function AddtoWatchLater(){
        let newarr = state.watch_later;
        newarr.push(state.ele);
        const action = setWatchLater(newarr);
        dispatch(action);
        history.push(`/WatchLater`)
      }


    return(
    <div>
      <Card style={{ width: '30rem' }}>
  <Card.Body>
  <iframe width="420" height="315"
            src={link}>
            </iframe>
  <h4>{state.ele.snippet.title}</h4>
            <p>{state.ele.snippet.publishedAt}</p>
            <h6><b>{state.ele.snippet.channelTitle}</b></h6>
            <h6>{state.ele.snippet.description}</h6>
            <Button variant="primary" onClick={AddtoWatchLater}>Watch later</Button>
   
  </Card.Body>
</Card>
        
            
    </div>
    )
}
export default Deteals;