import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import useAudioStore from '../store/audioStore'

const AudioIpnutRadio = () => {
  const state = useAudioStore((state) => state.state)
  const input = useAudioStore((state) => state.input)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => {
    if (v === null) return
    updateField(['input', Number(v)], false)
  }

  if (typeof input === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Audio input</FormLabel>
      <ToggleButtonGroup
        value={input}
        onChange={handleChange}
        exclusive
        size="large"
        disabled={state === 0}
      >
        <ToggleButton value={0}>PC</ToggleButton>
        <ToggleButton value={1}>CD</ToggleButton>
        <ToggleButton value={2}>DIGITAL</ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  )
}

export default AudioIpnutRadio
