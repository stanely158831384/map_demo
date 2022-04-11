
import {useEffect,useRef,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment-timezone';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import myImg from '../static/global.jpg';


function TimeZone(){
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
        document.getElementById("sw").innerHTML=userTimezone+" "+a.format().substring(11,19);
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={myImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}

export default TimeZone;