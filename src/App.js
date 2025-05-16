import { ThemeProvider, BaseStyles } from '@primer/react'
import Directory from './Directory'
import ColorModeSwitcher from './ColorModeSwitcher'

function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <Directory />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
