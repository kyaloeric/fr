import React from 'react';
import Home from './Home';
import Speakers from './Speakers';



export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};


// global config we can use without parsing properties over components to get them where we want 
const configValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: false,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;