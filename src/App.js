 import {  
   Route, 
    RouterProvider, 
    createRoutesFromElements,
    createBrowserRouter
  } from 'react-router-dom'

 import Home from './pages/Home'
 import SignUp from './pages/SignUp'
 import Login from './pages/Login'
 import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/Help/faq'
import Contact, { contactAction } from './pages/Help/contact'
import NotFound from './pages/NotFound'
import CareersLayout from './layouts/CareersLayout'
import Careers , { CareersLoader } from './pages/Careers/careers'
import CareerDetails, { careerDetailsLoader } from './pages/CareerDetails'
import ApplyForm from './pages/ApplyForm'
import ReactDOM from 'react-dom'
import './App.css'

 const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path="/" element={<RootLayout />}>

      <Route>
         <Route index element={< Home />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
      </Route>
          


          <Route path="about" element={< About />} />
       <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}/>
          <Route path="contact" element={<Contact />} action={contactAction} />
       </Route>

       <Route path="Careers" element={<CareersLayout />}>
         <Route
          index
          element={<Careers />} 
          loader={CareersLoader}
          />
       </Route>
      <Route>
        <Route  
         path="/careers/:id"
         element={<CareerDetails />}
         loader={careerDetailsLoader}
         />
         <Route path="/apply" element={<ApplyForm />} />
      </Route>
       


       <Route path="*" element={<NotFound />} />
    </Route>
  
  )
 )
function App() {
  return (
  <RouterProvider router={router} />
      );
}

export default App
