import React from 'react'
import Box from '@mui/material/Box';

const Display = (props) => {
    return (
        <div>
            <Box sx={{
                p: 2,
                border: '2px dashed grey'
                , margin: '20px',
                display: "absoult",
                width:"200px",
                height:"200px",
                // display: "inline-block",
                // display: "inline"
            }}>
                {props.store}

            </Box>
        </div>
    )
}

export default Display
