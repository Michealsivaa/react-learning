import React from "react";
import Grid from '@mui/material/Grid';
import "./footerStyle.scss";

function Footer(){
    return(
        <div className="footer">
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <p>@Copyright</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;