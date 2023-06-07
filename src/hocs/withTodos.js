import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { update } from "../store/reducers/todo.reducer";

export const withTodos = Component => props => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleUpdate = useCallback((value) => {
        dispatch(update(value));
      },[dispatch]);

    return <Component {...props} todos={todos} handleUpdate={handleUpdate}></Component>
}