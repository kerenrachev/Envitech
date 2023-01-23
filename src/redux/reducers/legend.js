import {UPDATE_JSON_MAP, LEGEND_STATE_CHANGED} from '../constants'


const initialState ={
    legendMap: null,
    monitorTypeName: null,
    monitorName: null,
    jsonMap: null
}

export const legend = (state = initialState, action) =>{
    switch(action.type){
        case LEGEND_STATE_CHANGED:
            return {
                ...state,
                legendMap : action.legendMap,
                monitorTypeName: action.monitorTypeName,
                monitorName: action.monitorName,
            }
        case UPDATE_JSON_MAP:
            return {
                ...state,
                jsonMap : action.jsonMap,
            }
        default : return state
    }
}