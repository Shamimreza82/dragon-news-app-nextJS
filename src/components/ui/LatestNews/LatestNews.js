import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"; 
import image1 from '@/assets/Rectangle 8.png'
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className='my-4'>
      <Card >
        <CardActionArea>
          <CardMedia>
             <Image src={image1} alt="bg image"></Image>
          </CardMedia>
          <CardContent>
            <p className="bg-red-500 px-3 py-2 text-left w-[100px] my-2 text-white text-bold">Technology</p>
            <Typography gutterBottom variant="h5" component="div">
            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography variant="body2" color="text.secondary">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default LatestNews;
