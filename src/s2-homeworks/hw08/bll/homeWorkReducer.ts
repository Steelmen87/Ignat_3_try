import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            action.payload === 'up'
                ? copyState.sort((a, b) => a.name.localeCompare(b.name))
                : copyState.sort((a, b) => b.name.localeCompare(a.name))
            return copyState
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
