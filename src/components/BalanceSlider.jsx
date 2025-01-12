import ArrowLeft from '@mui/icons-material/ArrowLeft'
import ArrowRight from '@mui/icons-material/ArrowRight'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import useAudioStore from '../store/audioStore'

const BalanceSlider = () => {
  const state = useAudioStore((state) => state.state)
  const balance = useAudioStore((state) => state.balance)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['balance', v])

  if (typeof balance === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Balance</FormLabel>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <ArrowLeft />
        <Slider
          valueLabelDisplay="auto"
          min={-10}
          max={10}
          value={Number(balance)}
          onChange={handleChange}
          disabled={state === 0}
        />
        <ArrowRight />
      </Stack>
    </FormControl>
  )
}

export default BalanceSlider
