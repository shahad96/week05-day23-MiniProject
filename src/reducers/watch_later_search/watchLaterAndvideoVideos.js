const initialState = {
    watch_later: [],
    videos:[],
    searchValue:""
  };

  const watchLaterAndvideoVideos = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_VIDEOS":
        return {
          videos: payload,
          watch_later: state.watch_later,
          searchValue: state.searchValue

        };
        case "SET_SEARCH_VALUE":
        return {
          videos: state.videos,
          watch_later: state.watch_later,
          searchValue: payload,
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