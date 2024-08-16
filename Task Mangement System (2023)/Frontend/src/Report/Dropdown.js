import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DataGrid1 from './DataGrid1'; // Import your data grid components
import DataGrid2 from './DataGrid2';
import DataGrid3 from './DataGrid3';
import Slider from '@mui/material/Slider';

function SliderWithDataGrids() {
    const [sliderValue, setSliderValue] = useState(5); // Set the initial value to one of the points

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Alerts:
            </Typography>
            <Slider sx={{ width: "70%" }}
                value={sliderValue}
                onChange={handleSliderChange}
                step={45} // Set the step to the gap between your points
                min={5}
                max={90}
                marks={[
                    { value: 5, label: 'Energy Consumtion' },
                    { value: 50, label: 'Temporature' },
                    { value: 90, label: 'Step 3' },
                ]}
            />
            <Grid container spacing={2}>
                {sliderValue === 5 && <DataGrid1 />}
                {sliderValue === 50 && <DataGrid2 />}
                {sliderValue === 90 && <DataGrid3 />}
            </Grid>
        </div>
    );
}

export default SliderWithDataGrids;
