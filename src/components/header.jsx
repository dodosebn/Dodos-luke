import React, { useState, Fragment } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiOutlineChatAlt, HiOutlineBell } from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel, Transition, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useNavigate } from 'react-router-dom'; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const navigate = useNavigate(); 

  return (
    <div className='z-10'>
    <section className='grid grid-cols-2 gap-4 w-full items-center p-4'>
      <article>
        <div className='relative'>
          <CiSearch fontSize={20} className='text-gray-400 absolute top-4 transform -translate-y-2/4 left-3' />
          <input
            type="text"
            placeholder='Search...'
            className='text-sm focus:outline-none h-9 w-full border border-gray-200 rounded-lg pl-10 pr-4'
          />
        </div>
      </article>

      {/* Notification and Menu Article */}
      <article className='fixed top-4 left-0 right-7'>
        <div className='flex items-center justify-end md:gap-4'>
          {/* Popover for Messages */}
          <Popover className="relative" open={isOpen} onOpenChange={setIsOpen}>
            <PopoverButton className="p-1.5 rounded inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
              <HiOutlineChatAlt fontSize={24} className="ml-2" />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-40 md:w-52 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                <strong className="text-gray-700 font-medium">Messages</strong>
                <div className="mt-2 py-1 text-sm">This is the message panel.</div>
              </PopoverPanel>
            </Transition>
          </Popover>

          {/* Popover for Notifications */}
          <Popover className="relative" open={isOpenNotification} onOpenChange={setIsOpenNotification}>
            <PopoverButton className="p-1.5 rounded inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
              <HiOutlineBell fontSize={24} className="ml-2" />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-40 md:w-52 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                <strong className="text-gray-700 font-medium">Notifications</strong>
                <div className="mt-2 py-1 text-sm">This is the notification panel.</div>
              </PopoverPanel>
            </Transition>
          </Popover>

          {/* Menu with Background Image */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none">
              <div
                style={{
                  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIES7LQf7xV5EsL-uTruT386qTS76sNI16g&s")`,
                  borderRadius: '50%',
                }}
                className="bg-cover w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-no-repeat bg-center"
              >
                <span className="sr-only">Dodo's Ebn</span>
              </div>
            </MenuButton>

            <MenuItems className="absolute right-0 z-10 mt-2 w-40 md:w-52 items-center md:origin-top-right rounded-xl border border-white/5 bg-gray-700 p-1 text-sm text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <button onClick={() => navigate("/profile")} className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-600' : ''}`}>
                    Your Profile
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button onClick={() => navigate("/setting")} className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-600' : ''}`}>
                    Settings
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button onClick={() => navigate("/logout")} className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-600' : ''}`}>
                    Log Out
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </article>
    </section>
    
    </div>
   
    
  );
}

export default Header;