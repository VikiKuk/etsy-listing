import { Listing } from './components/Listing'
import data from './data/etsy.json'

function App() {
  return (
    <div className="wrapper">
      <Listing items={data} />
    </div>
  )
}

export default App