import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function MpvButton({ onClick }) {
    return (
        <Box
            sx={{
                color: "white",
                backgroundColor: "black",
                marginTop: "20px",
                border: "2px solid white",
                borderRadius: "5px",
                fontSize: "20px",
                "&:hover": {
                    backgroundColor: "#00B4D8",
                },
            }}
        >
            <Button
                variant="text"
                onClick={onClick}
                fullWidth
                sx={{ padding: "10px 50px" }}
            >
                用 MPV 播放
            </Button>
        </Box>
    );
}
