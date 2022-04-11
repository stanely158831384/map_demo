
import {useEffect,useRef,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment-timezone';

function Test(){
    const {data,setData} = useState("Timezone loading");
    const dispatch = useDispatch();
    const td = useSelector((state) => state.td);
    const accessToken = 'pk.eyJ1Ijoic3RhbmxleTE1ODgzMTM4NCIsImEiOiJjbDFyNm5pa2IwdDl3M2RsbWZhZzdqd3lhIn0.tIb4Xrl64Du1_fLhLP575A';
    async function testAPI(){
        const query = await fetch(
            `https://api.mapbox.com/v4/examples.4ze9z6tv/tilequery/${td[0].lon},${td[0].lat}.json?access_token=${accessToken}`,
            { method: 'GET' }
            );
        const dataJson = await query.json();
        if(dataJson.features.length!=0){
        const userTimezone = dataJson.features[0].properties.TZID;        
        // console.log(new Date().toUTCString());
        var a = moment.utc(new Date().toUTCString()).tz(userTimezone);
        console.log(a.format().substring(11,19));
        document.getElementById("sw").innerHTML=userTimezone;
        }
    }

    
    useEffect(()=>{
        
    },[]);

    useEffect(()=>{
        if(td.length!=0){
            testAPI();
        }
    },[td]);


    return(
        <div>
            <h1 id="sw">loading</h1>
            <h2>{data}</h2>
        </div>
    )
}

export default Test;