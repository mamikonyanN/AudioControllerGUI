import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import PrimarySettingsTab from './layouts/PrimarySettingsTab'
import SecondarySettingsTab from './layouts/SecondarySettingsTab'
import TabPanel from './ui/TabPanel'

const App = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_, newValue) => setValue(newValue)

  return (
    <>
      <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Primary settins" value={0} />
          <Tab label="Secondary settings" value={1} />
        </Tabs>
      </Container>

      <Container>
        <TabPanel value={value} index={0}>
          <PrimarySettingsTab />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <SecondarySettingsTab />
        </TabPanel>
      </Container>
    </>
  )
}

export default App
