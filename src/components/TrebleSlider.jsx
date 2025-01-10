import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import useAudioStore from '../store/audioStore'

const TrebleSlider = () => {
  const treble = useAudioStore((state) => state.treble)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['treble', v])

  if (typeof treble === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Treble</FormLabel>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider
          valueLabelDisplay="auto"
          min={-10}
          max={10}
          value={Number(treble)}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
    </FormControl>
  )
}

export default TrebleSlider
