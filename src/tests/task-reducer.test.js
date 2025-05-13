import { taskReducer } from "../store/reducers/task-reducer.js";

describe("taskReducer", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("должен вернуть начальное состояние с пустыми задачами", () => {
        const initialState = taskReducer(undefined, {});
        expect(initialState).toEqual({
            tasks: [],
        });
    });

    test("должен загрузить задачи из localStorage", () => {
        const mockTasks = [{ id: 1, text: "Тестовая задача" }];
        localStorage.setItem("tasks", JSON.stringify(mockTasks));

        const initialState = taskReducer(undefined, {});
        expect(initialState).toEqual({
            tasks: mockTasks,
        });
    });

    test("должен добавить новую задачу", () => {
        const initialState = { tasks: [] };
        const newTask = { id: 1, text: "Новая задача" };
        const action = { type: "ADD_TASK", payload: newTask };

        const newState = taskReducer(initialState, action);

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0]).toEqual(newTask);
        expect(JSON.parse(localStorage.getItem("tasks"))).toEqual([newTask]);
    });

    test("должен удалить задачу по id", () => {
        const tasks = [
            { id: 1, text: "Задача 1" },
            { id: 2, text: "Задача 2" },
        ];
        const initialState = { tasks };
        const action = { type: "REMOVE_TASK", payload: 1 };

        const newState = taskReducer(initialState, action);

        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].id).toBe(2);
        expect(JSON.parse(localStorage.getItem("tasks"))[0].id).toBe(2);
    });

    test("должен обновить существующую задачу", () => {
        const tasks = [
            { id: 1, text: "Старый текст" },
            { id: 2, text: "Задача 2" },
        ];
        const initialState = { tasks };
        const updatedTask = { id: 1, text: "Новый текст" };
        const action = { type: "UPDATE_TASK", payload: updatedTask };

        const newState = taskReducer(initialState, action);

        expect(newState.tasks).toHaveLength(2);
        expect(newState.tasks.find((t) => t.id === 1)).toEqual(updatedTask);
        expect(JSON.parse(localStorage.getItem("tasks")).find((t) => t.id === 1).text).toBe(
            "Новый текст",
        );
    });

    test("должен вернуть текущее состояние для неизвестного действия", () => {
        const initialState = { tasks: [{ id: 1, text: "Задача 1" }] };
        const action = { type: "UNKNOWN_ACTION" };

        const newState = taskReducer(initialState, action);

        expect(newState).toBe(initialState);
    });
});
