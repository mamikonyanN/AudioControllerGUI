import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

const BassSlider = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        Bass
      </Typography>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          aria-label="Volume"
          min={-10}
          max={10}
          value={value}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  )
}

export default BassSlider
