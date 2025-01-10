import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import useAudioStore from '../store/audioStore'

const BassSlider = () => {
  const bass = useAudioStore((state) => state.bass)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['bass', v])

  if (typeof bass === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Bass</FormLabel>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          min={-10}
          max={10}
          value={Number(bass)}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </FormControl>
  )
}

export default BassSlider
