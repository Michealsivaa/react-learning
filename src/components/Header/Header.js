import React from "react";
import "./headerStyle.scss";
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router";


export default function Header(){
    const navigate = useNavigate();

        const handleRoute = (page) => {
            navigate(page)
        }

    return(
        <div className="header">
            <Grid container alignItems="center">
                <Grid item xs={12} sm={3} md={3} lg={2} xl={2} className="headerLeft">
                    <h3>MSV</h3>
                </Grid>
                <Grid item xs={12} sm={9} md={9} lg={10} xl={10} className="headerRight">
                    <div className="menu">
                        <button className="active">Home</button>
                        <button>About Us</button>
                        <button onClick={() => handleRoute('/pages/ContactUs')} >Contact</button>
                        <button>Feed</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}