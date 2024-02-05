import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextRedux from './components/TextRedux'
import ButtonRedux from './components/ButtonRedux'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
      </div>
      <h1>Redux Toolkit</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <TextRedux />
      <br />
      <ButtonRedux />
    </div>
  )
}

export default App
