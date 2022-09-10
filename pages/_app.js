import '../styles/globals.css'
import AlertTemplate from 'react-alert-template-basic';
import  {store } from '../store/index.js'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}
  return  (
          <Provider store={store}>
              <AlertProvider template={AlertTemplate} {...options}>
                <Layout>
                  <Component {...pageProps}/>
                </Layout>
              </AlertProvider>
            </Provider>
          )
            
}

export default MyApp
