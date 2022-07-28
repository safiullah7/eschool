import { Switch } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode';

function DarkMode() {
  const darkMode = useDarkMode(false);

  return (
    <Switch checked={darkMode.value} onChange={() => darkMode.toggle()}/>
  )
}

export default DarkMode
