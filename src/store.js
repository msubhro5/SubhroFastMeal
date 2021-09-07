import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const myStore = createStore(rootReducer);

export default myStore;