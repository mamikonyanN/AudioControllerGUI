import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

const VolumeSlider = () => {
  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          aria-label="Volume"
          min={1}
          max={56}
          value={value}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </Box>
  )
}

export default VolumeSlider
