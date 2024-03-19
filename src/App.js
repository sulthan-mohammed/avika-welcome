import React from "react";
import './App.css';
import BottomArtForMobile from './assets/bottomArt1.svg';
import AvikaLogo from './assets/AvikaLogo.svg';
import PlaystoreIcon from './assets/play-store-color-icon.svg';
import SendIcon from './assets/sendIcon.svg';
import DownloadIcon from './assets/downloadIcon.png';
import AppStoreIcon from './assets/app-store.png';
import { isAndroid, isIOS ,isMacOs} from 'react-device-detect';

// Define store items as an array of objects
const storeItems = [
  {
    platform: 'android',
    icon: PlaystoreIcon,
    heading: 'Download Avika App',
    helperText: 'Tap here to download the app.'
  },
  {
    platform: 'ios',
    icon: AppStoreIcon,
    heading: 'App Store',
    helperText: 'Tap here to download the app on the App Store.'
  }
];

function App() {

  const [isLoading, setIsLoading] = React.useState(false);

  // Detect the user agent to determine the platform
  let platform = '';
  if (isIOS || isMacOs) {
    platform = 'ios';
  } else{
    platform = 'android';
  }

  const handleNavigator = () => {
    setIsLoading(true);
    if (platform === 'android') {
      window.location.href = 'https://play.google.com/store/apps';
    } else if (platform === 'ios') {
      window.location.href = 'https://apps.apple.com';
    }
  };

  return (
    <div className='dashboard-screen'>
      <div className='logo-container'>
        <img src={AvikaLogo} alt='logo'/>
      </div>
      {isLoading && (
        <div>
          <div/>
          <div>Loading...</div>
        </div>
      )}
      {!isLoading && (
        <div className='main-container'>
          <div className='header-container'>
            <div className='heading'>Welcome to Avika</div>
            <div className='sub-heading'>
              Your journey towards better health starts here.
            </div>
          </div>
          <div className='store-container'>
            {storeItems.map((item, index) => (
              platform === item.platform && (
                <div onClick={handleNavigator} className='store-item' key={index}>
                  <img width={35} height={35} src={item.icon} alt={`${item.heading} icon`}/>
                  <div className='store-details'>
                    <div className='store-heading'>{item.heading}</div>
                    <div className='store-helper-text'>{item.helperText}</div>
                  </div>
                  <img width={35} height={35} src={SendIcon} alt='send icon'/>
                </div>
              )
            ))}
          </div>
        </div>
      )}
      <div className='dashboard-art-holder'>
        <img className='image-width' src={BottomArtForMobile} alt='art'/>
      </div>
    </div>
  );
}

export default App;
