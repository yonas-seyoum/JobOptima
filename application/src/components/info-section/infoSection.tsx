
import React from "react";
import "./style/infoSection.css"
import { Box, TextField, Button, Divider } from "@mui/material";

export default function InfoSection() {
    return (
        <>
            <div className="info-section-holder">
                <div className="info-section-title">Contact us</div>
                <div className="info-section">
                    <div className="info-section-content">

                        <div className="about-us">
                            About Us
                        </div>
                        <Divider orientation="vertical" flexItem>
                            Job Optima
                        </Divider>
                        <div className="contact-us">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, /*width: '25ch'*/ }
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        color="warning"
                                        sx={{ width: '23ch' }}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Last Name"
                                        color="warning"
                                        sx={{ width: '23ch' }}
                                    />
                                    <TextField
                                        required
                                        id="outlined-read-only-input"
                                        label="Email"
                                        color="warning"
                                        sx={{ width: '47.5ch' }}
                                    />

                                    <TextField
                                        id="outlined-number"
                                        label="Message"
                                        sx={{ width: '47.5ch' }}
                                        color="warning"
                                        multiline
                                        maxRows={7}
                                    />
                                    <Button
                                        color="warning"
                                        disabled={false}
                                        size="medium"
                                        variant="contained"
                                        sx={{ m: 1 }}
                                    >Submit</Button>
                                </div>

                            </Box>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


