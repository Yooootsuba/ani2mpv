import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function App() {
    return (
        <Box
            sx={{
                color: "white",
                backgroundColor: "black",
                marginTop: "20px",
                padding: "0px 30px",
                border: '2px solid white',
                borderRadius: "5px",
                fontSize: "20px",
                '&:hover': {
                    backgroundColor: '#00B4D8',
                },
            }}
        >
            <Button variant="text">
                用 MPV 播放
            </Button>
        </Box>
    );
}

export default App;
