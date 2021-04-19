import React from 'react'
import { Navbar } from 'react-bootstrap'



export default function Footer() {
    return (
        <Navbar expand="md" style={{ height: '30px', marginTop:'5%', backgroundColor:'#212121'}}>
            <Navbar.Brand href="https://www.facebook.com/profile.php?id=100002349439643" style={{ fontSize: '12px', color:'white' }}>@Developed by Chaiwat Singkibut</Navbar.Brand>
        </Navbar>
    )
}