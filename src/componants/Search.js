import { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos,setSearchValue } from "../reducers/watch_later_search/watchLaterAndvideoVideos";
import Video from "./Video";
import './compo.css';
import { Link } from "react-router-dom";
import { Navbar,Form,Button,Container,FormControl,Nav } from 'react-bootstrap';


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
            <Navbar bg="light" expand="lg">
  <Container fluid>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    <Nav.Link href="/">Back</Nav.Link>
    </Nav>
      <Form className="d-flex">
        <FormControl onChange={searchValueFun}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Link to="/Search"><Button onClick={reSearch} variant="outline-success">Search</Button></Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

            
            <div id="grid">
            {state.videos.map((ele,index)=><Video ele={ele} index={index}/>)}</div>
          </div>
        )
}
export default Search;