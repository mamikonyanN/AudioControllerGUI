import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

const BalanceSlider = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        BalanceSlider
      </Typography>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <ArrowLeft />
        <Slider
          valueLabelDisplay="auto"
          aria-label="Volume"
          min={-10}
          max={10}
          value={value}
          onChange={handleChange}
        />
        <ArrowRight />
      </Stack>
    </Box>
  )
}

export default BalanceSlider
