import { Grid2 } from '@mui/material'
import BalanceSlider from './components/BalanceSlider'
import BassSlider from './components/BassSlider'
import SWSlider from './components/SwSlider'
import TrebleSlider from './components/TrebleSlider'
import VolumeSlider from './components/VolumeSlider'

function App() {
  return (
    <Grid2
      direction={'column'}
      container
      spacing={2}
      width={300}
      margin={'auto'}
      marginY={10}
    >
      <VolumeSlider />
      <SWSlider />
      <BassSlider />
      <TrebleSlider />
      <BalanceSlider />
    </Grid2>
  )
}

export default App
