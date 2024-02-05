#### Redux Toolkit

```sh
npm create vite@latest local -- --template react
npm install @reduxjs/toolkit react-redux
```

#### Create a Redux Store

- src/redux/store.jsx

```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

- src/main.jsx (update Provider and store)

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//TODO:
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    //TODO:
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```

- ตรวจสอบ DevTools extension

#### Create a Redux State Slice

- src/redux/userSlice.jsx (export default)

```js
import { createSlice } from '@reduxjs/toolkit'
//TODO:
const initialState = {
  value: 'Redux',
}
//TODO:
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'jay login'
    },
    logout: (state) => {
      state.value = 'jay logout'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
//TODO: Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
```

- src/redux/store.jsx (import)

```js
import { configureStore } from '@reduxjs/toolkit'
//TODO:
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    //TODO:
    user: userSlice,
  },
})
```

- ตรวจสอบ DevTools extension
- Redux -> State -> Raw

```c
{
  user: {
    value: 'Redux'
  }
}
```

#### Use Redux State and Actions in React Components

- src/components/TextRedux.jsx (create file)

```js
import { useSelector } from 'react-redux'

const TextRedux = () => {
  let { user } = useSelector((state) => ({ ...state }))
  console.log(user)

  return <div>{user.value}</div>
}
export default TextRedux
```

- src/redux/userSlice.jsx (update state)

```js
const initialState = {
  value: 'Redux',
  //TODO:
  user: [],
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //TODO:
    login: (state) => {
      state.value = 'jay login'
      state.user = 'welcome'
    },
    //TODO:
    logout: (state) => {
      state.value = 'jay logout'
      state.user = 'bye bye'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
```

- src/components/ButtonRedux.jsx (create file)

```js
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice'

const ButtonRedux = () => {
  let dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(login())}>Redux Login</button> &nbsp;
      <button onClick={() => dispatch(logout())}>Redux Logout</button>
    </div>
  )
}
export default ButtonRedux
```

- src/App.jsx

```js
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//TODO:
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
      {/* TODO: */}
      <TextRedux />
      <br />
      {/* TODO: */}
      <ButtonRedux />
    </div>
  )
}

export default App
```
