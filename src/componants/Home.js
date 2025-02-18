import axios from "axios";
import {useEffect } from "react";
import Video from "./Video";
import './compo.css';
import { useDispatch, useSelector } from "react-redux";
import { setVideos,setSearchValue } from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import { Link } from "react-router-dom";
import { Navbar,Form,Button,Container,FormControl } from 'react-bootstrap';


function Home(){
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log(state.watchLaterAndvideoVideos)
    return {
      videos: state.watchLaterAndvideoVideos.videos,
      searchValue: state.watchLaterAndvideoVideos.searchValue,
    };
  });

    useEffect(() => {
        axios
          .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyBlG-dgOBJcKLIVz7sIma0Pz16a-XE5Yio")
          .then((response) => {
            const action = setVideos(response.data.items);
            dispatch(action);   
          })
          .catch((err) => {console.log(err);});
      }, []);
      
      function searchValueFun(e){
        const action = setSearchValue(e.target.value);
                dispatch(action);
      }
      return(
        <div>
          <Navbar bg="light" expand="lg">
  <Container fluid>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      
      <Form className="d-flex">
        <FormControl onChange={searchValueFun}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Link to="/Search"><Button variant="outline-success">Search</Button></Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 
          <div id="grid">
          {state.videos.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
        </div>
      )
}
export default Home;