import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import speakersReducer from './speakersReducer';

//import custom hook

import useSpeakerDataManager from './useSpeakerDataManager';


// our global context import
import { ConfigContext } from './App';
import speakerData from './SpeakerData';

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  //using the useContext hook
  const context = useContext(ConfigContext);

  //extracted code rplaced with the call to the custom hook useSpeakerDatamanager
  const { isLoading, speakerList, toggleSpeakerFavorite } = useSpeakerDataManager();

  // use State mplementation
  //const [speakerList, setSpeakerList] = useState([]);

  // simple switch statement based on the action type(moved to the reducer file)
  


  // implementation of the same using useReducer
  // 1st implementation
 // const [speakerList, dispatch] = useReducer(speakersReducer, []);
 // const [isLoading, setIsLoading] = useState(true);



//  // FURTHER NEW 3rd step IMPLEMENTING  THIS CODE EXTRACTE TO CUSTOM COMPONENT 
//  // 2nd using custom hooks 
//  const [{isLoading, speakerList}, dispatch] = useReducer(speakersReducer, {
//   isLoading: true,
//   speakerList: []
 
//  });

 
//    // INITIAL implementation

//   //using the useContext hook
//   //const context = useContext(ConfigContext);

//   useEffect(() => {
//   // setIsLoading(true);
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve();
//       }, 1000);
//     }).then(() => {

//       //initial implementation
    
//       //setSpeakerList(SpeakerData);
//      // setIsLoading(false);
//       //const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
//         //return (speakingSaturday && sat) || (speakingSunday && sun);
//    // });
//     //setSpeakerList(speakerListServerFilter);

//     // dispatch method will call the reducer and new state returned which is the data passed in as data attribute to the ation object

//     dispatch({
//       type: 'setSpeakerList',
//       data: speakerData,
//     });
//   });
//   return () => {
//     console.log('cleanup');
//   };
// }, []); // [speakingSunday, speakingSaturday]);





  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  // LET"S COMMENT IT AND BELOW IT THERE IS AN IMPLEMENTTION OF THE SAME SHOWING HOW TO USE useMemo

  // const speakerListFiltered = isLoading
  //   ? []
  //   : speakerList
  //       .filter(
  //         ({ sat, sun }) =>
  //           (speakingSaturday && sat) || (speakingSunday && sun),
  //       )
  //       .sort(function (a, b) {
  //         if (a.firstName < b.firstName) {
  //           return -1;
  //         }
  //         if (a.firstName > b.firstName) {
  //           return 1;
  //         }
  //         return 0;
  //       });

  // the atual implementation using use memo

  const newSpeakerList = useMemo(
    () =>
      speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        }),

        // dependency array below
    [speakingSaturday, speakingSunday, speakerList],
  );

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  


  // using useCallback displayed
  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    
    // no longer used underspeakerRec new implememtation const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    toggleSpeakerFavorite(speakerRec);
   
    // calls speaker reducer and returns new state
    // dispatch({
    //   type: favoriteValue === true ? 'favorite' : 'unfavorite',
    //   id: sessionId,
    // },[]);
    // // we comment our initial code relate with useState
    
    // setSpeakerList(
    //   speakerList.map((item) => {
    //     if (item.id === sessionId) {
    //       return { ...item, favorite: favoriteValue };
    //     }
    //     return item;
    //   }),
    // );
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 chekbox-bigger">
        {context.showSpeakerSpeakingDays === false ? null : (
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
                Sunday Speakers
              </label>
            </div>
          </div>
        )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              (speakerRec) => {
                return (
                  <SpeakerDetail
                    key={speakerRec.id}
                    speakerRec = {speakerRec}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
