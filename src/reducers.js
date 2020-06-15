export default function notes( state = [], action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state.note, {...action.note}]
        case 'EDIT_NOTE':
            return []
        case 'DELETE_NOTE':
            return []
        default:
            return state
    };
};


