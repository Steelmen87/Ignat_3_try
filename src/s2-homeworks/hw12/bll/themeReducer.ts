export type initStateType = {
    themeId: number
}


const initState = {
    themeId: 1,
}
type actionType = changeThemeIdType
export const themeReducer = (state: initStateType = initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}
type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
