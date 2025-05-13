import { createStore } from "../core/store/create-store";
import { taskReducer } from "./reducers/task-reducer";

export const store = createStore(taskReducer);
