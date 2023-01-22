import {LEGEND_STATE_CHANGED} from '../constants'
import {legends} from '../../data/Legends'
export const setLegendByMonitorId = (monitorTypeLegendId) => (dispatch) =>{
    
    let tempLegend = ""
    legends["Legends"].forEach((legend)=>{
        if(legend["Id"] === monitorTypeLegendId){
            tempLegend= legend
        }
    })
    return dispatch({
        legendMap: tempLegend,
        type: LEGEND_STATE_CHANGED
    })
}