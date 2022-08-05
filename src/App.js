import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from "./pages"
import './App.css'
import { useStateContext } from './contexts/ContextProvider'

const App = () => {
  const { activeMenu } = useStateContext();
  return (
      <div>
          <BrowserRouter>
              <div className=" flex relative dark:bg-main-dark-bg">
                  <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                      <TooltipComponent content="Settings" position="top">
                          {/* the button ˝shows the seetings wheel in the right bottom corner, the style is just applied for the moment, because its going to chnage depending on the theme */}
                          <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background:'blue', borderRadius:'50%'}}>
                              <FiSettings />
                        </button>
                      </TooltipComponent>
          </div>
          {/* activeMenu variable is set tu true in line 8 */}
          {activeMenu ? (
            // this div shows when activeMenu variable is true
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
          ) : (
              // this div shows when activeMenu variable is false
              <div className='w-0 dark:bg-secondary-dark-bg'>
                {/* sidebar not visible , because the width is set to 0 */}
                <Sidebar/>
              </div>
          )}
          {/* div for navigation bar */}
          {/* the way the class properties are written to avoid repeating code, the properties outside the $ are always applied,
          but the properties inside the ${ } are applied depending on the value of the activeMenu variable true or false and combined with the properties outside the ${} */}
          <div className={
            `dark:bg-main-bg bg-main-bg
            min-h-screen w-full ${activeMenu ? 'md_ml-72' : 'flex-2'}`
           }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
             <Navbar/>
            </div>
          </div>
          <div>

            <Routes>
              {/* dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              
              {/* pages */} 

              <Route path="/orders" element={<Orders/>} />
              <Route path="/employees" element={<Employees/>} />
              <Route path="/customers" element={<Customers />} />
              {/* Apps */}
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/kanban" element={<Kanban/>} />
              <Route path="/editor" element={<Editor/>} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
               </div>
            </BrowserRouter>
         </div>
        )
       }

export default App