import React, { PureComponent } from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import ThemedStacks from './ThemedStacks'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemedStacks />
      </Provider>
    )
  }
}

export default App
