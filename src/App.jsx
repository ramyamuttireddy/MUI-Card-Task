import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Grid2 } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function App() {


  return (

    <Container maxWidth="lg" sx={{marginTop:'100px'}}>
      <Grid2 display='flex' gap={3} flexGrow={1}>
        <Card sx={{boxShadow: "none", textAlign: "center", padding: '10px' }} >

          <CardMedia
            image="/assets/card-image1.jpg"
            alt="Paella dish"
            sx={{height:'220px', width:"230px" , borderRadius:"8px" ,}}
          />
          <CardActions display="flex" sx={{justifyContent:"Center",marginTop:"-30px",alignItems:"center"}}>
           <Button sx={{bgcolor:"White",padding:"8px 30px",border:"1px solid #AD8A85",borderRadius:"999px",textTransform:"none",color:"black",fontSize:"14px", fontFamily:'Red hat italic',fontWeight:"600"}} ><ShoppingCartOutlinedIcon sx={{marginRight:"8px",color:"#C73B0F"}}></ShoppingCartOutlinedIcon>Add To Cart</Button>
          </CardActions>
         
          <CardContent sx={{ textAlign: "left" ,padding:"0"}}>
            <Typography variant="p" sx={{ color: '#87635A',fontSize:"14px" ,fontFamily:'Red hat italic'}}>
            Waffle
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            Waffle with Berries
            </Typography>
            <Typography variant="h7" sx={{ color: '#C73B0F' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            $6.50
            </Typography>
          </CardContent>

        </Card>

        <Card sx={{boxShadow: "none", textAlign: "center", padding: '10px' }}>

          <CardMedia
            image="/assets/card-image2.jpg"
            alt="Paella dish"
            sx={{height:'220px', width:"230px" , borderRadius:"8px" ,}}
          />
          <CardActions display="flex" sx={{justifyContent:"Center",marginTop:"-30px",alignItems:"center"}}>
           <Button sx={{bgcolor:"White",padding:"8px 30px",border:"1px solid #AD8A85",borderRadius:"999px",textTransform:"none",color:"black",fontSize:"14px", fontFamily:'Red hat italic',fontWeight:"600"}} ><ShoppingCartOutlinedIcon sx={{marginRight:"8px",color:"#C73B0F"}}></ShoppingCartOutlinedIcon>Add To Cart</Button>
          </CardActions>
         
          <CardContent sx={{ textAlign: "left" ,padding:"0"}}>
            <Typography variant="p" sx={{ color: '#87635A',fontSize:"14px" ,fontFamily:'Red hat italic'}}>
            Crème Brûlée
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            Vanilla Bean Crème Brûlée
            </Typography>
            <Typography variant="h7" sx={{ color: '#C73B0F' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            $7.00
            </Typography>
          </CardContent>

        </Card>

        <Card sx={{boxShadow: "none", textAlign: "center", padding: '10px' }}>

          <CardMedia
            image="/assets/card-image3.jpg"
            alt="Paella dish"
            sx={{height:'220px', width:"230px" , borderRadius:"8px" ,}}
          />
          <CardActions display="flex" sx={{justifyContent:"Center",marginTop:"-30px",alignItems:"center"}}>
           <Button sx={{bgcolor:"White",padding:"8px 30px",border:"1px solid #AD8A85",borderRadius:"999px",textTransform:"none",color:"black",fontSize:"14px", fontFamily:'Red hat italic',fontWeight:"600"}} ><ShoppingCartOutlinedIcon sx={{marginRight:"8px",color:"#C73B0F"}}></ShoppingCartOutlinedIcon>Add To Cart</Button>
          </CardActions>
         
          <CardContent sx={{ textAlign: "left",padding:"0" }}>
            <Typography variant="p" sx={{ color: '#87635A',fontSize:"14px" ,fontFamily:'Red hat italic'}}>
            Macaron
            </Typography>
            <Typography variant="h6" sx={{ color: 'black' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            Macaron Mix of Five
            </Typography>
            <Typography variant="h7" sx={{ color: '#C73B0F' ,fontSize:"18px" ,fontWeight:"600" ,fontFamily:'Public Sans' }}>
            $8.00
            </Typography>
          </CardContent>

        </Card>

        
        
      </Grid2>
    </Container>




  );
}
