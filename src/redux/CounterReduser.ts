export type initialStateType = {
    startNum: number
    maxNum: number
    error: string
    currentValue: null|number
}
export type startNumACType = ReturnType<typeof startNumAC>
export type maxNumACType = ReturnType<typeof maxNumAC>
export type resetACType = ReturnType<typeof resetAC>
export type setACType = ReturnType<typeof setAC>
export type addNaumACType = ReturnType<typeof addNumAC>
type  actionCreator = startNumACType | maxNumACType |
    resetACType | setACType | addNaumACType

let initialState = {
    startNum: 0,
    maxNum: 0,
    error: 'enter value',
    currentValue: null
}

export const CounterReducer = (state: initialStateType = initialState, action: actionCreator): initialStateType => {

    switch (action.type) {
        case 'CHANGE_START_NUM':
            if (action.startNum < 0) {
                return {...state, error: 'the value must be greater than 0(minValue<0)'}
            } else if (state.maxNum === action.startNum) {
                return {...state, error: 'incorrect value:why maxValue=minValue?'}
            } else {
                return {...state, startNum: action.startNum, error: ""}
            }

        case 'CHANGE_MAX_NUM':
            if (action.maxNum !== 0) {
                if (action.maxNum > state.startNum) {
                    return {...state, maxNum: action.maxNum, error: ""}//x
                }
                if (action.maxNum < state.startNum || action.maxNum === state.startNum) {
                    return {
                        ...state,
                        error: 'incorrect value:max and min cannot be equal(мах и мин не могут быть равны)'
                    }
                }
            } else {
                return {...state, error: 'enter maxValue'}
            }
        case 'RESET_NUM':
            return {
                ...state, currentValue: state.startNum
            }
        case 'SET_NUM':
            debugger
            return {...state, currentValue: state.startNum}
        case 'ADD_NUM':
            debugger
            if (state.currentValue!==null){
                if(state.maxNum>state.currentValue)
                {return {...state, currentValue: state.currentValue + 1}}
                else{ return {...state, error: 'incorrect value'}}
            }
        default : {
            return state
        }
    }
}
export const maxNumAC = (maxNum: number) => ({type: 'CHANGE_MAX_NUM', maxNum} as const)
export const startNumAC = (startNum: number) => ({type: 'CHANGE_START_NUM', startNum} as const)
export const resetAC = () => ({type: 'RESET_NUM'} as const)
export const setAC = () => ({type: 'SET_NUM'} as const)
export const addNumAC = () => ({type: 'ADD_NUM'} as const)
