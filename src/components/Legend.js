
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
                        {console.log(legend)}
                        <h1>{legend ? legend.Id : ""}</h1>
                    </div>
                    :
                    null
            }

        </div>

    );
};

export default Legend;