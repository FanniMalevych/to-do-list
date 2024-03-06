import { Provider } from 'react-redux'
import store from './redux/store'
import ToDo from './components/ToDo'

function App() {
  return (
    <Provider store={store}>
       <ToDo />
    </Provider>
  )
}

export default App
