import { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import Video from "./Video";
import './compo.css';


function Search({searchValue}){
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      videos: state.watchLaterAndvideoVideos.videos,
    };
  });
  let link= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+searchValue+"&key=AIzaSyBvpi4MoUCcP08E5epDqhDJgMOhiwYJpwk"
    useEffect(() => {
        axios
          .get(link)
          .then((response) => {
            console.log(response.data.items);
            const action = setVideos(response.data.items);
            dispatch(action);
            
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      return(
          <div>
            <div id="grid">
            {state.videos.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
          </div>
        )
}
export default Search;