import Grid2 from '@mui/material/Grid2'
import AudioIpnutRadio from '../components/AudioIpnutRadio'
import StatusSwitch from '../components/StateSwitch'
import VolumeSlider from '../components/VolumeSlider'

const PrimarySettingsTab = () => {
  return (
    <Grid2 container direction={'column'} spacing={2}>
      <StatusSwitch />
      <VolumeSlider />
      <AudioIpnutRadio />
    </Grid2>
  )
}

export default PrimarySettingsTab
