import "../styles/globals.css";
import { ToastContainer, toast } from 'react-toastify';
import Provider from "../pages/context/AuthContext";

import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  

  return (<>
  <Provider>
        <ToastContainer />
  <Component {...pageProps} />
  </Provider>
  </>
  );
}

export default  App
