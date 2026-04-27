import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Home from '@/assets/icons/homeicon.svg';
import LoginButton from '@/components/LoginButton';
import trelloLogo from '@/assets/trello-logo.gif';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="grid fixed top-0 z-10 grid-cols-3 w-full h-10 bg-blue7 shadow-xl">
      <button
        data-test-id="home"
        className={`bg-white bg-opacity-30 hover:bg-opacity-20 self-center text-white rounded-sm ml-3 w-8 h-8 cursor-pointer grid ${
          location.pathname !== '/' ? 'visible' : 'invisible'
        }`}
        onClick={() => navigate('/')}
      >
        <Home className="place-self-center" />
      </button>
      <img
        data-test-id="trello-logo"
        src={trelloLogo}
        className="place-self-center py-3 h-10 opacity-60 hover:opacity-100 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div className="flex justify-end items-center mr-3 gap-2">
        <button
          data-test-id="settings-nav"
          className="bg-white bg-opacity-30 hover:bg-opacity-20 text-white rounded-sm w-8 h-8 cursor-pointer grid"
          onClick={() => navigate('/settings')}
          title="Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="place-self-center w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
        <LoginButton />
      </div>
    </nav>
  );
};

export default Navbar;
