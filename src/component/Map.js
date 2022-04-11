import React, { useState, useRef } from 'react';

import Button from '@mui/material/Button';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
import { useEffect } from 'react';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Counter from './Counter';
import { useSelector, useDispatch } from "react-redux";
import TimeZone from './TimeZone'

function Map(){
    // const [result,setResult] = useState([]);
    const [map, setMap] = useState({});
    // const resultRef = useRef(result);
    const dispatch = useDispatch();
    const td = useSelector((state) => state.td);
    const tdRef = useRef(td);




    useEffect(()=>{
        var L = window.L;
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhbmxleTE1ODgzMTM4NCIsImEiOiJjbDFyNm5pa2IwdDl3M2RsbWZhZzdqd3lhIn0.tIb4Xrl64Du1_fLhLP575A';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        const searchBar = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            });

        searchBar.on("result", (e) => {
            console.log(e);

            let data = {};
            data['id'] = e.result.id;
            data['text'] = e.result.text;
            data['lon'] = e.result.center[0];
            data['lat'] = e.result.center[1];
            data['macker'] = new mapboxgl.Marker()
            .setLngLat([e.result.center[0], e.result.center[1]])
            .addTo(map);
            // console.log("here is buffer before: ");
            // console.log(...resultRef.current);
            // console.log("here is buffer after: ");
            // console.log(buffer);
            console.log("at remove progress: "+tdRef.current.length);

            // if(tdRef.current.length >=10){
            //     let removeLastData = [...tdRef.current];
            //     removeLastData.pop();
            //     dispatch({type:"customData",value:removeLastData});
            // }
            // setResult(buffer);
            dispatch({type: "addData",value:data});
        })
        
        map.addControl(
            searchBar
        );
        setMap(map);
    },[]);

    useEffect(()=>{
        tdRef.current = td;
        console.log("useeffect: ");
        console.log(tdRef.current);
    },[td])

    useEffect(()=>{
        console.log("has came out")
    })
    return(
        <div>
        <div id="map"></div>
        
        </div>
    )
}


export default Map;