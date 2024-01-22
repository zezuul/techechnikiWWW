import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
      <ToastContainer />
    </>
  );
};


export default App;
