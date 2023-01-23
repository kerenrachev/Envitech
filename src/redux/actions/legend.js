import {LEGEND_STATE_CHANGED} from '../constants'
import { LEGENDS } from '../../constants/legendsJSON'
import { ID } from '../../constants/legendsJSON'
var legends = require('../../data/Legends')
export const setLegendByMonitorId = (monitorTypeLegendId, monitorTypeName, monitorName) => (dispatch) =>{
    
    let tempLegend = null
    legends[LEGENDS]?.forEach((legend)=>{
        if(legend[ID] === monitorTypeLegendId){
            tempLegend= legend
        }
    })
    return dispatch({
        legendMap: tempLegend,
        monitorTypeName,
        monitorName,
        type: LEGEND_STATE_CHANGED
    })
}