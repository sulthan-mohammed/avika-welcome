import React from "react";
import './App.css';
import BottomArtForMobile from './assets/bottomArt1.svg';
import AvikaLogo from './assets/AvikaLogo.svg';
import PlaystoreIcon from './assets/play-store-color-icon.svg';
import SendIcon from './assets/sendIcon.svg';
import AppStoreIcon from './assets/app-store.png';

// Define store items as an array of objects
const storeItems = [
  {
    platform: 'android',
    icon: PlaystoreIcon,
    heading: 'Play Store',
    helperText: 'Tap here to download the app on Google Play Store.'
  },
  {
    platform: 'ios',
    icon: AppStoreIcon,
    heading: 'App Store',
    helperText: 'Tap here to download the app on the App Store.'
  }
];

function App() {
  // Detect the user agent to determine the platform
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let platform = '';
  if (/android/i.test(userAgent)) {
    platform = 'android';
  } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
    platform = 'ios';
  }

  // Filter the store items based on the platform
  const filteredStoreItems = storeItems.filter(item => item.platform === platform);

  // Render both store items if no platform is detected
  const renderStoreItems = filteredStoreItems.length > 0 ? filteredStoreItems : storeItems;

  const handleNavigator = () => {
    console.log('clicked');
    if (platform === 'android') {
        window.location.href = 'https://play.google.com/store/apps';
    } else if (platform === 'ios') {
        window.location.href = 'https://apps.apple.com';
    }else{
      console.log(' device not found')
    }
};
  return (
    <div className='dashboard-screen'>
      <div className='logo-container'>
        <img src={AvikaLogo} alt='logo'/>
      </div>
      <div className='main-container'>
        <div className='header-container'>
          <div className='heading'>Welcome to Avika</div>
          <div className='sub-heading'>
            Your journey towards better health starts here.
          </div>
        </div>
        <div className='store-container'>
          {renderStoreItems.map((item, index) => (
            <div onClick={handleNavigator
            } className='store-item' key={index}>
              <img width={35} height={35} src={item.icon} alt={`${item.heading} icon`}/>
              <div className='store-details'>
                <div className='store-heading'>{item.heading}</div>
                <div className='store-helper-text'>{item.helperText}</div>
              </div>
              <img width={35} height={35} src={SendIcon} alt='send icon'/>
            </div>
          ))}
        </div>
      </div>
      <div className='dashboard-art-holder'>
        <img className='image-width' src={BottomArtForMobile} alt='art'/>
      </div>
    </div>
  );
}

export default App;
