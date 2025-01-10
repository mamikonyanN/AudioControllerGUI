import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Skeleton from '@mui/material/Skeleton'
import { v4 as uuidv4 } from 'uuid'
import useAudioStore from '../store/audioStore'

const INPUT_COUNT = 3

const AudioIpnutRadio = () => {
  const input = useAudioStore((state) => state.input)
  const updateField = useAudioStore((state) => state.updateField)

  const handleChange = (_, v) => updateField(['input', Number(v)], false)

  if (typeof input === 'undefined') return <Skeleton height={80} />

  return (
    <FormControl>
      <FormLabel>Audio input</FormLabel>
      <RadioGroup
        value={input}
        onChange={handleChange}
        row
        sx={{ margin: '0 auto' }}
      >
        {Array(INPUT_COUNT)
          .fill(0)
          .map((key, value) => (
            <FormControlLabel
              key={uuidv4()}
              value={value}
              control={<Radio />}
              label={value + 1}
              labelPlacement="bottom"
            />
          ))}
      </RadioGroup>
    </FormControl>
  )
}

export default AudioIpnutRadio
