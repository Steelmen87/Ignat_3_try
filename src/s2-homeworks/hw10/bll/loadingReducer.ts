type initialStateType = {
    isLoading: boolean
}
type ActionType = LoadingActionType;
const initState: initialStateType = {
    isLoading: false,
}

export const loadingReducer = (state: initialStateType = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
