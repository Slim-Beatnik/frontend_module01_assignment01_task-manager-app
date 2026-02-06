
export interface Task {
  id: string;
  title: string;
  description?: string;
  lastCompleted?: Date;
  active?: boolean;
  lastActive?: Date;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'REMOVE_TASK'; payload: { id: string } }
  | { type: 'UPDATE_TASK'; payload: Task }
  | { type: 'TOGGLE_PRIORITY'; payload: { id: string } }
  | { type: 'TOGGLE_ACTIVE_TASK'; payload: { id: string } }
  | { type: 'TOGGLE_TASK_COMPLETION'; payload: { id: string } }
  | { type: 'HYDRATE_TASKS'; payload: Task[] };

export const initializer = (initialState: Task[]): Task[] => {
  try {
    const storedState = localStorage.getItem('myAppState');
    return storedState ? JSON.parse(storedState) : initialState;
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return initialState;
  }
};

export default function taskReducer(state: Task[], action: TaskAction): Task[] {
  const priorities = ['low', 'medium', 'high'] as const;

  switch (action.type) {
    case 'ADD_TASK':
      // default priority to 'low' if not provided, and ensure immutability
      return [...state, { ...action.payload, priority: action.payload.priority || 'low' }];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload.id);
    case 'UPDATE_TASK':
      return state.map(task => (task.id === action.payload.id ? action.payload : task));
    case 'TOGGLE_PRIORITY':
      return state.map(task => ({
        ...task,
        // Cycle through priorities: low -> medium -> high -> low
        priority: task.id === action.payload.id ? priorities[(priorities.indexOf(task.priority || 'low') + 1) % 3] : task.priority,
      }));
    case 'TOGGLE_ACTIVE_TASK':
      return state.map(task => ({
        ...task,
        active: task.id === action.payload.id ? !task.active : task.active,
        lastActive: task.id === action.payload.id && !task.active ? new Date() : task.lastActive,
      }));
    case 'TOGGLE_TASK_COMPLETION':
      return state.map(task => ({
        ...task,
        completed: task.id === action.payload.id ? !task.completed : task.completed,
        active: task.id === action.payload.id && task.completed ? false : task.active,
        lastCompleted: task.id === action.payload.id && !task.completed ? new Date() : task.lastCompleted,
      }));
    case 'HYDRATE_TASKS':
      return action.payload;
    default:
      return state;
  }
};