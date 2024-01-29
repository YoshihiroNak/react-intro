import './App.css'
import Greeting from './Greeting'

function App() {
  return (
    // fragment
      <>
        <h1>Hello</h1>
        <Greeting foo="bar" name="Matt" age={51} />
        <p>Lorem ipsum dolor sit amet</p>
        <Greeting abc="123" name="Kate" />
        <Greeting  />
      </>
    )
  }

export default App
