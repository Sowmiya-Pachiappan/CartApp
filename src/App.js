import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartScreen from './screens/CartScreen';
import ProductDetails from './components/ProductDetails';
import SuccessScreen from './screens/SuccessScreen';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route element={<AppLayout />}>
            <Route index element={<HomeScreen />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='cart' element={<CartScreen />}></Route>
            <Route path='success' element={<SuccessScreen />}></Route>
          </Route>
          <Route path='login' element={<LoginScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
