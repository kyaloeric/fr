// new code showing the use of the global context

import React from 'react';
import useSpeakerDataManager from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender,
  } = useSpeakerDataManager();

  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};





// old code 

// import React from 'react';
// import useSpeakerDataManager from './useSpeakerDataManager';

// export const GlobalContext = React.createContext();

// export const GlobalProvider = ({ children }) => {
//   const {
//     isLoading,
//     speakerList,
//     toggleSpeakerFavorite,
//   } = useSpeakerDataManager();

//   const provider = {
//     isLoading,
//     speakerList,
//     toggleSpeakerFavorite,
//   };

//   return (
//     <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
//   );
// };

