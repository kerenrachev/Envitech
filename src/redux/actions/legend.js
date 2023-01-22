import {LEGEND_STATE_CHANGED} from '../constants'
import {legends} from '../../data/Legends'
export const setLegendByMonitorId = (monitorTypeLegendId, monitorTypeName, monitorName) => (dispatch) =>{
    
    let tempLegend = ""
    legends["Legends"].forEach((legend)=>{
        if(legend["Id"] === monitorTypeLegendId){
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