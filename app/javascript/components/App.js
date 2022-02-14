import React from "react"
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'

const store = configureStore();
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Greeting greeting="Homie"/> }></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
