import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import useAudioStore from '../store/audioStore'

const VolumeSlider = () => {
  const state = useAudioStore((state) => state.state)
  const volume = useAudioStore((state) => state.volume)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['volume', v])

  if (typeof volume === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Volume</FormLabel>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          min={1}
          max={56}
          valueLabelDisplay="auto"
          onChange={handleChange}
          value={Number(volume)}
          disabled={state === 0}
        />
        <VolumeUp />
      </Stack>
    </FormControl>
  )
}

export default VolumeSlider
