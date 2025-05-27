import { createStore } from "@core";
import { taskReducer } from "./reducers";

export { taskReducer } from "./reducers";

export const store = createStore(taskReducer);
