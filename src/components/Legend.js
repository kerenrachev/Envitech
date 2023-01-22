
import { legends } from '../data/Legends'
import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';



const Legend = () => {

    const legend = useSelector((state) => state.legend.legendMap)


    return (
        <div className='legend-holder'>
            {
                legend ?
                    <div className='legend'>

                        <h1>{/*legend ? legend.Id : ""*/} MonitorTypeName [Monitor]</h1>

                        {legend.tags.map((item) => {
                            return (
                                <div className='one-legend-holder'>
                                        <div style={{height: '10px', width: '10px', background: item.Color}}></div>
                                        <p>{item["Label"]}</p>
                                </div>

                            )
                        })}
                    </div>
                    :
                    null
            }

        </div>

    );
};

export default Legend;