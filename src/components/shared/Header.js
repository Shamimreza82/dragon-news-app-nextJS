import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/The Dragon News.png'
import getCurrentDate from '@/utils/getCurrentDate';
import moment from 'moment/moment';
// import getCurrentDate from '@/utils/getCurrentDate'

const Header = () => {
    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(currentDate); 
    return (
        <Box className="py-5">
            <Container className='text-center'>
                <Image  className='m-auto' src={logo} width={400} height={400} alt='logo'></Image>
                <Typography variant='body2'>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography>
                {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;