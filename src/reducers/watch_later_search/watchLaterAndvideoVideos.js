const initialState = {
    watch_later: [],
    videos:[],
    searchValue:"",
    ele:{},
    index:0
  };

  const watchLaterAndvideoVideos = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_VIDEOS":
        return {
          videos: payload,
          watch_later: state.watch_later,
          searchValue: state.searchValue,
          ele:state.ele,
          index:state.index

        };
        case "SET_WATCH_LATER":
        return {
          videos: state.watch_later,
          watch_later: payload,
          searchValue: state.searchValue,
          ele:state.ele,
          index:state.index

        };
        case "SET_SEARCH_VALUE":
        return {
          videos: state.videos,
          watch_later: state.watch_later,
          searchValue: payload,
          ele:state.ele,
          index:state.index
        };
        case "SET_ELE":
        return {
          videos: state.videos,
          watch_later: state.watch_later,
          searchValue: state.searchValue,
          ele:payload,
          index:state.index
        };
        case "SET_INDEX":
        return {
          videos: state.videos,
          watch_later: state.watch_later,
          searchValue: state.searchValue,
          ele:state.ele,
          index: payload
        };
      default:
        return state;
    }
  };
  
  export default watchLaterAndvideoVideos;

  export const setVideos = (videos) => {
    return {
      type: "SET_VIDEOS",
      payload: videos,
    };
  };

  export const setSearchValue = (value) => {
    return {
      type: "SET_SEARCH_VALUE",
      payload: value,
    };
  };

  export const setEle = (ele) => {
    return {
      type: "SET_ELE",
      payload: ele,
    };
  };

  export const setIndex = (index) => {
    return {
      type: "SET_INDEX",
      payload: index,
    };
  };

  export const setWatchLater = (arr) => {
    
    return {
      type: "SET_WATCH_LATER",
      payload: arr,
    };
  };