import { combineReducers } from "@core";

describe("combineReducers", () => {
    const counterReducer = (state = 0, action) => {
        if (action.type === "INCREMENT") return state + 1;
        return state;
    };

    const textReducer = (state = "", action) => {
        if (action.type === "SET_TEXT") return action.payload;
        return state;
    };

    test("комбинирует редюсеры и возвращает новое состояние", () => {
        const rootReducer = combineReducers({
            count: counterReducer,
            text: textReducer,
        });

        const initialState = { count: 0, text: "" };

        // Тест на действие INCREMENT
        const stateAfterIncrement = rootReducer(initialState, { type: "INCREMENT" });
        expect(stateAfterIncrement).toEqual({ count: 1, text: "" });

        // Тест на действие SET_TEXT
        const stateAfterSetText = rootReducer(stateAfterIncrement, {
            type: "SET_TEXT",
            payload: "hello",
        });
        expect(stateAfterSetText).toEqual({ count: 1, text: "hello" });
    });

    test("инициализирует состояние, если оно undefined", () => {
        const rootReducer = combineReducers({
            count: counterReducer,
            text: textReducer,
        });

        const initialState = rootReducer(undefined, { type: "UNKNOWN_ACTION" });
        expect(initialState).toEqual({ count: 0, text: "" });
    });
});
