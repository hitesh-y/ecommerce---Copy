import {createStore} from "redux";
import rootRecucer from "./reducers/index";

const store = createStore(rootRecucer)

export default store;