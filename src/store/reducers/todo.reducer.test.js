import todoReducer, {
    add,
    update,
    remove,
    removeCompleted,
    reorderArray,
  } from './todo.reducer';
  
  describe('todo reducer', () => {
    it('should handle add', () => {
      const initialState = [];
      const todo = { id: 1, name: 'Task 1', completed: false };
      const action = add(todo);
      const nextState = todoReducer(initialState, action);
      expect(nextState).toEqual([todo]);
    });
  
    it('should handle update', () => {
      const initialState = [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
      ];
      const action = update(2);
      const nextState = todoReducer(initialState, action);
      expect(nextState[1].completed).toBe(false);
    });
  
    it('should handle remove', () => {
      const initialState = [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
      ];
      const action = remove(1);
      const nextState = todoReducer(initialState, action);
      expect(nextState).toEqual([
        { id: 2, name: 'Task 2', completed: true },
      ]);
    });
  
    it('should handle removeCompleted', () => {
      const initialState = [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
      ];
      const action = removeCompleted();
      const nextState = todoReducer(initialState, action);
      expect(nextState).toEqual([
        { id: 1, name: 'Task 1', completed: false },
      ]);
    });
  
    it('should handle reorderArray', () => {
      const initialState = [
        { id: 1, name: 'Task 1', completed: false },
        { id: 2, name: 'Task 2', completed: true },
      ];
      const reorderedState = [
        { id: 2, name: 'Task 2', completed: true },
        { id: 1, name: 'Task 1', completed: false },
      ];
      const action = reorderArray(reorderedState);
      const nextState = todoReducer(initialState, action);
      expect(nextState).toEqual(reorderedState);
    });
  });