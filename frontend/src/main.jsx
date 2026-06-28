import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import About from './landing_page/about/About'
import PricingPage from './landing_page/pricing/PricingPage'
import SignUp from './landing_page/signup/SignUp'
import SupportPage from './landing_page/support/SupportPage'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './landing_page/Footer'
import Navbar from './landing_page/Navbar'
import NotfoundPage from './landing_page/NotfoundPage'
import ForgotPassword from './landing_page/signup/ForgotPassword';
import ResetPassword from "./landing_page/signup/ResetPassword";
createRoot(document.getElementById('root')).render(
  

  <BrowserRouter>
<Navbar/>
<Routes>

  <Route path='/' element={<HomePage />} />

  <Route path='/signup' element={<SignUp />} />

  <Route path='/forgot-password' element={<ForgotPassword />} />
  <Route path="/reset-password" element={<ResetPassword />}/>

  <Route path='/about' element={<About />} />

 

  <Route path='/pricing' element={<PricingPage />} />

  <Route path='/support' element={<SupportPage />} />

  <Route path='*' element={<NotfoundPage />} />

</Routes>
    <Footer/>
  </BrowserRouter>
)