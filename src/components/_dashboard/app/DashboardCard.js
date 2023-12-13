// import DashboardCardData from './DashboardCardData.json'
import { Card, CardHeader, Typography, Grid,Button,Container  } from '@mui/material';
import { useState } from 'react';


var jsonData = [{  
    "id":1,
  "heading": "Total Project",
  "count": 100
},
{  
    "id":2,
  "heading": "Active Project",
  "count": 100
},
{    "id":3,
  "heading": "Total Credits",
  "count": 100
}]
export default function DashboardCard() {
    const[cardData,setcardData] = useState(jsonData)
    console.log(cardData);
  return(
   
    <Container maxWidth="xl" mt={5}>
      <Grid container spacing={3} mt={5}>
          
    { cardData.length==0 ? '' : cardData.map(data =>( 
      <Grid item xs={12} sm={6} md={4} >
        <Card >
        <CardHeader title={data.heading} pt={2}/>
        <Typography variant="h5" sx={{ p: 2, pl: 3 }}>{data.count}</Typography>
        </Card>
        </Grid>)
    )} 
    </Grid>
    </Container>
   
    );
  
}
