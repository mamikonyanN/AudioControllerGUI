import Grid2 from '@mui/material/Grid2'
import BalanceSlider from '../components/BalanceSlider'
import BassSlider from '../components/BassSlider'
import SWSlider from '../components/SWSlider'
import TrebleSlider from '../components/TrebleSlider'

const SecondarySettingsTab = () => {
  return (
    <Grid2 container direction={'column'} spacing={2}>
      <SWSlider />
      <BassSlider />
      <TrebleSlider />
      <BalanceSlider />
    </Grid2>
  )
}

export default SecondarySettingsTab
