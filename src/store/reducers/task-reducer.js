const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

export function taskReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case "ADD_TASK":
            newState = {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
            break;
        case "REMOVE_TASK":
            newState = {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
            break;
        default:
            newState = state;
    }
    localStorage.setItem("tasks", JSON.stringify(newState.tasks));
    return newState;
}
