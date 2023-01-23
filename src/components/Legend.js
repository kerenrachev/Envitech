import React from 'react';
import {useSelector } from 'react-redux'
import '../App.css';
import {LABEL} from '../constants/legendsJSON'

const Legend = () => {

    const legend = useSelector((state) => state.legend.legendMap)
    const monitorTypeName = useSelector((state) => state.legend.monitorTypeName)
    const monitorLevelName = useSelector((state) => state.legend.monitorName)
    return (
        <>
            {
                legend && monitorLevelName && monitorLevelName ?
                        <div className='legend'>

                            <p className='legend-card-title'>{  monitorTypeName + " " + monitorLevelName }</p>

                            {legend.tags?.map((item) => {
                                return (
                                    <div className='one-legend-holder'>
                                        <div className='color-holder' style={{ height: '25px', width: '25px', background: item.Color }}></div>
                                        <p className='tag-label'>{item[LABEL]? item[LABEL]: ""}</p>
                                    </div>

                                )
                            })}
                    </div>
                    :
                    null
            }
        </>
    );
};

export default Legend;