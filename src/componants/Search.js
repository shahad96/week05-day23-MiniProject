import { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos,setSearchValue } from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import Video from "./Video";
import './compo.css';
import { Link } from "react-router-dom";


function Search(){
  const dispatch = useDispatch();
  const [search,setSearch]=useState(true);

  const state = useSelector((state) => {
    // console.log(state.watchLaterAndvideoVideos)
    return {
      videos: state.watchLaterAndvideoVideos.videos,
      searchValue: state.watchLaterAndvideoVideos.searchValue
    };
  });
  let link= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+state.searchValue+"&key=AIzaSyBlG-dgOBJcKLIVz7sIma0Pz16a-XE5Yio"
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
      },[search]);

      function searchValueFun(e){
        const action = setSearchValue(e.target.value);
                dispatch(action);
      }
      function reSearch(){
        setSearch(!search);
      }

      return(
          <div>
            <input onChange={searchValueFun}></input>
        <button onClick={reSearch}>Search</button>
            <Link to="/">back</Link>
            <div id="grid">
            {state.videos.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
          </div>
        )
}
export default Search;