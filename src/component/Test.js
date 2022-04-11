
import {useEffect,useState} from 'react';
function Test(){
    const {data,setData} = useState("Timezone loading");
       
    useEffect(()=>{
        const longitude = -69.86667;
        const latitude = 18.49333;
        const accessToken = 'pk.eyJ1Ijoic3RhbmxleTE1ODgzMTM4NCIsImEiOiJjbDFyNm5pa2IwdDl3M2RsbWZhZzdqd3lhIn0.tIb4Xrl64Du1_fLhLP575A';
        async function testAPI(){
        const query = await fetch(
            `https://api.mapbox.com/v4/examples.4ze9z6tv/tilequery/${longitude},${latitude}.json?access_token=${accessToken}`,
            { method: 'GET' }
            );
        const dataJson = await query.json();
        const userTimezone = dataJson.features[0].properties.TZID;
        // setData(query);
        console.log(userTimezone);
        }
        testAPI();
        document.getElementById("sw").innerHTML="cityLookup";
    },[]);

    return(
        <div>
            <h1 id="sw">loading</h1>
            <h2>{data}</h2>
        </div>
    )
}

export default Test;