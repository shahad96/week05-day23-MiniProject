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
      console.log(state.index);
      let link= "https://www.youtube.com/embed/"+state.ele.id.videoId;


    return(
    <div>
        <iframe width="420" height="315"
            src={link}>
            </iframe>
    </div>
    )
}
export default Deteals;