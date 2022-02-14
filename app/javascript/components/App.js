import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import Greeting from './Greeting';

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
