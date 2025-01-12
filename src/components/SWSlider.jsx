import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import useAudioStore from '../store/audioStore'

const SWSlider = () => {
  const state = useAudioStore((state) => state.state)
  const sw = useAudioStore((state) => state.sw)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['sw', v])

  if (typeof sw === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>SW</FormLabel>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          min={0}
          max={15}
          value={Number(sw)}
          onChange={handleChange}
          disabled={state === 0}
        />
        <VolumeUp />
      </Stack>
    </FormControl>
  )
}

export default SWSlider
