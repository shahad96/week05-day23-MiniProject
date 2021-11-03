import { createStore, combineReducers } from "redux";

import watchLaterAndvideoVideos from "./watch_later_search/watchLaterAndvideoVideos";
const reducers = combineReducers({watchLaterAndvideoVideos});
const store = createStore(reducers);

export default store;