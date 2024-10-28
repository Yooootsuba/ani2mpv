import React from "react";
import Box from "@mui/material/Box";


export default function MessageBox({ text }) {
    return (
        <Box
            sx={{
                color: "white",
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
            }}
        >
            {text}
        </Box>
    );
}
