import axios from "axios";
import { useState,useEffect } from "react";
import Video from "./Video";
import './compo.css';
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/watch_later_search/watchLaterAndvideoVideos";



function Home(){
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      videos: state.watchLaterAndvideoVideos.videos,
    };
  });
    const [array,setArray]=useState([]);

    useEffect(() => {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyBvpi4MoUCcP08E5epDqhDJgMOhiwYJpwk")
          .then((response) => {
            setArray(response.data.items);
            const action = setVideos(response.data.items);
            dispatch(action);   
          })
          .catch((err) => {console.log(err);});
      }, []);
      
      
      return(
        <div>
          <div id="grid">
          {state.videos.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
        </div>
      )
}
export default Home;