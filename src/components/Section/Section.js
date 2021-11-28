import React from "react";
import "./sectionStyle.scss";
import Grid from '@mui/material/Grid';

export default function Section(){
    return(
        <div className="section">
            <Grid container >
                <Grid item xs={12}>
                    <h3>MSV</h3>
                </Grid>
            </Grid>
        </div>
    )
}