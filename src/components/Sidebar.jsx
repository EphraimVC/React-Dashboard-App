import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={() => setActiveMenu(false)} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware /> <span> Shoppy </span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button"
              onClick={() => { }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block">
              <MdOutlineCancel />
             </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            // the div below with the key attribute makes each mapped title unique with a unique key number
            <div key={ item.title}>
              <p  className='text-gray-400 m-3 mt-4 uppercase'>
              {item.title}
              {/* the map array selects every title from every object in the dummy.js file and displays them in order */}
              </p>
              {item.links.map((link) => (
                // NavLink component 
                <NavLink
                  // its tells where to be redirected
                  to={`/${link.name}`}
                  // it gives every name value a unique key so it can be identified
                  key={link.name}
                  // insside the onclick, the setActiveMenu has a callback function , that uses the "prev"activeMenu to toggle between the latest value 
                  onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                  // is active is an opotion given by using the navlink component
                  className={({ isActive }) => 
                    isActive ? activeLink : normalLink}
                >
                  {/* link below select the icons in the dummy.js file to be dislpayed */}
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
           </div> 
          ))}
        </div>
     </>)}

    </div>
  )
}

export default Sidebar