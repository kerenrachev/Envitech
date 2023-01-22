
import { legends } from '../data/Legends'
import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';



const Legend = () => {

    const legend = useSelector((state) => state.legend.legendMap)
    const monitorTypeName = useSelector((state) => state.legend.monitorTypeName)
    const monitorLevelName = useSelector((state) => state.legend.monitorName)
    return (
        <>
            {
                legend ?
                        <div className='legend'>

                            <p className='legend-card-title'>{legend ? monitorTypeName + " " + monitorLevelName : ""}</p>

                            {legend.tags.map((item) => {
                                return (
                                    <div className='one-legend-holder'>
                                        <div className='color-holder' style={{ height: '25px', width: '25px', background: item.Color }}></div>
                                        <p className='tag-label'>{item["Label"]}</p>
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