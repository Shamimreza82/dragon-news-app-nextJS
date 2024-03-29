"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/Group.png'
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Header from './Header';


const NavItems = [
    {
        route: "Home", 
        pathname: '/'
    },
    {
        route: "Pages", 
        pathname: '/pages'
    },
    {
        route: "Category", 
        pathname: '/category'
    },
    {
        route: "News", 
        pathname: '/news'
    },
    {
        route: "About", 
        pathname: '/about'
    },
    {
        route: "Contact", 
        pathname: '/contact'
    },
];


function Navber() {
  

  return (
    <>
    <Header></Header>
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Image src={logo} height={100} width={100} alt='logo'></Image>
          <Box className='w-full text-center' >
            {NavItems.map((item) => (
                <Link key={item} href={item.pathname}>
                    <Button className='text-white'>
                        {item.route}
                    </Button>
                </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" spacing={2} sx={{'& svg': {color: 'white'}}} >
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
                <FacebookIcon></FacebookIcon>
            </IconButton>
            </Stack>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navber;
