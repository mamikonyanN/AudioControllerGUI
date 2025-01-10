import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Skeleton from '@mui/material/Skeleton'
import Switch from '@mui/material/Switch'
import useAudioStore from '../store/audioStore'

const StateSwitch = () => {
  const state = useAudioStore((state) => state.state)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['state', Number(v)], false)

  if (typeof state === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Status</FormLabel>
      <Switch checked={Boolean(state)} onChange={handleChange} />
    </FormControl>
  )
}

export default StateSwitch
