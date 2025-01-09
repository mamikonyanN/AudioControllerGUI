import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

const SWSlider = () => {
  const [value, setValue] = useState(10)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        SW
      </Typography>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          aria-label="Volume"
          min={0}
          max={15}
          value={value}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  )
}

export default SWSlider
