const initialState = {
    watch_later: [],
    videos:[]
  };

  const watchLaterAndvideoVideos = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_VIDEOS":
        return {
          videos: payload,
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