// navbar
import React from 'react';

const NavBar = () => {
  return (
    <nav className="w-screen border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
            <div className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center" id="navItems">
                <span className="group">
                    Home
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
                <span className="group">
                    Portfolios
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
                <span className="group">
                    Contacts
                    <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
                </span>
            </div>
            {/* <div id="hamburger" className="fa fa-bars flex items-center text-xl"></div>
            <div id="mobileNav"
                className="fixed border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <span>Services</span>
                <span>About</span>
                <span>Contact</span>
            </div> */}
        </div>
    </nav>
  );
};

export default NavBar;
