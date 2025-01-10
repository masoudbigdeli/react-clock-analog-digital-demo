
import { Clock } from 'react-clock-analog-digital'
import AppWrapper, { ClockWrapper, CodeViewWrapper, PropertiesWrapper } from "./styles/app"

function App() {

  return (
    <AppWrapper>
      <ClockWrapper>
         <Clock clockMode='analog' />
      </ClockWrapper>
      <CodeViewWrapper>

      </CodeViewWrapper>
      <PropertiesWrapper>

      </PropertiesWrapper>
    </AppWrapper>
  )
}

export default App
