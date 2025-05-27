import { store } from "@store";

export const taskModel = {
    getTasks() {
        return store.getState().tasks;
    },

    addTask(task) {
        store.dispatch({ type: "ADD_TASK", payload: task });
    },

    removeTask(taskId) {
        store.dispatch({ type: "REMOVE_TASK", payload: taskId });
    },

    updateTask(task) {
        store.dispatch({ type: "UPDATE_TASK", payload: task });
    },

    subscribe(listener) {
        return store.subscribe(listener);
    }
};
