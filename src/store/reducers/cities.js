export default function todos(state = [], action) {
    switch (action.type) {
        case "ADD_CITY": {
            return [...state, { id: Math.random(), name: action.payload.name }];
        }
        case "DELETE_CITY": {
            return state.filter((city) => city.id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
}
