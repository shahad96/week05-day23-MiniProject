import { useDispatch, useSelector } from "react-redux";


function Deteals(){
    const dispatch = useDispatch();
    const state = useSelector((state) => {
       
        
        return {
          ele: state.watchLaterAndvideoVideos.ele,
          index: state.watchLaterAndvideoVideos.index,
          videos: state.watchLaterAndvideoVideos.videos
        };
      });
      console.log(state.videos[state.index]);
      console.log(state.ele);
      let link= "https://www.youtube.com/embed/"+state.ele.id.videoId;

      function AddtoWatchLater(){
        
      }


    return(
    <div>
        <iframe width="420" height="315"
            src={link}>
            </iframe>
            <h4>{state.ele.snippet.title}</h4>
            <p>{state.ele.snippet.publishedAt}</p>
            <h6><b>{state.ele.snippet.channelTitle}</b></h6>
            <h6>{state.ele.snippet.description}</h6>
            <button onClick={AddtoWatchLater}>Watch later</button>
    </div>
    )
}
export default Deteals;