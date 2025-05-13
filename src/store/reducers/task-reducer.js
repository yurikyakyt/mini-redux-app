export function taskReducer(state, action) {
    if (state === undefined) {
        state = {
            tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
        };
    }

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
        case "UPDATE_TASK":
            newState = {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task,
                ),
            };
            break;
        default:
            newState = state;
    }

    localStorage.setItem("tasks", JSON.stringify(newState.tasks));
    return newState;
}
