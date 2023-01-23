import {LEGEND_STATE_CHANGED, UPDATE_JSON_MAP} from '../constants'
import { LEGENDS,LEGEND_ID,MONITOR, MONITOR_TYPE, MONITOR_TYPE_ID, NAME } from '../../constants/legendsJSON'
import { ID } from '../../constants/legendsJSON'

export const setLegendByMonitorId = (legends, monitorTypeName, monitorName) => (dispatch) =>{
    
    return dispatch({
        legendMap: legends[0],
        monitorTypeName,
        monitorName,
        type: LEGEND_STATE_CHANGED
    })
}

export const updateJSONMAP = (json, setLegends) => (dispatch) =>{
    
    let jsonMap = {
        MonitorType: []
    }
    json[MONITOR_TYPE]?.forEach((monitorTypeObj)=>{
        monitorTypeObj[LEGENDS] = []
        json[LEGENDS]?.forEach((legendObj)=>{
           if(legendObj[ID]!= undefined && legendObj[ID] === monitorTypeObj[LEGEND_ID]){
                monitorTypeObj[LEGENDS].push(legendObj)
            }
        })
        monitorTypeObj[MONITOR] = []
        json[MONITOR]?.forEach(monitorObj => {
            if(monitorObj[MONITOR_TYPE_ID]!= undefined && monitorObj[MONITOR_TYPE_ID] === monitorTypeObj[ID]){
                monitorTypeObj[MONITOR].push(monitorObj)
            }
        });
        jsonMap[MONITOR_TYPE].push(monitorTypeObj)
    })
    setLegends(jsonMap)
    console.log(jsonMap)

    return dispatch({
        jsonMap: jsonMap,
        type: UPDATE_JSON_MAP
    })
}


