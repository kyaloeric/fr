import speakersReducer from './speakersReducer';
import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

import { InitialSpeakersDataContext } from '../pages/speakers';

function useSpeakerDataManager() {
  const initialSpeakersData = useContext(InitialSpeakersDataContext);

  const [
    { isLoading, speakerList, favoriteClickCount, hasErrored, error },
    dispatch,
  ] = useReducer(speakersReducer, {
    isLoading: false,
    speakerList: initialSpeakersData,
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      await axios.put(`/api/speakers/${speakerRec.id}`, {
        ...speakerRec,
        favorite: !speakerRec.favorite,
      });
      speakerRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: speakerRec.id })
        : dispatch({ type: 'favorite', id: speakerRec.id });
    };

    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get('/api/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasErrored,
    error,
  };
}
export default useSpeakerDataManager;







// // // this is the newly created custom hook from the initial code from SPeaker.js

// // import speakersReducer from './speakersReducer';
// // import axios from 'axios';
// // import { useEffect, useReducer } from 'react';

// // // all code in this module does not contain the server-side or static
// // // site generation code from the end of the last module. It all relies
// // // on the useEffect hook to load speakers data.

// // function useSpeakerDataManager() {
// //   const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
// //     isLoading: true,
// //     speakerList: [],
// //   });

// //   function toggleSpeakerFavorite(speakerRec) {
// //     const updateData = async function () {
// //       axios.put(`/api/speakers/${speakerRec.id}`, {
// //         ...speakerRec,
// //         favorite: !speakerRec.favorite,
// //       });
// //       speakerRec.favorite === true
// //         ? dispatch({ type: 'unfavorite', id: speakerRec.id })
// //         : dispatch({ type: 'favorite', id: speakerRec.id });
// //     };
// //     updateData();
// //   }
// //   useEffect(() => {
// //     const fetchData = async function () {
// //       let result = await axios.get('/api/speakers');
// //       dispatch({ type: 'setSpeakerList', data: result.data });
// //     };
// //     fetchData();
// //     return () => {
// //       console.log('cleanup');
// //     };
// //   }, []);
// //   return { isLoading, speakerList, toggleSpeakerFavorite };
// // }
// // export default useSpeakerDataManager;





// import speakersReducer from './speakersReducer';
// import axios from 'axios';
// import { useEffect, useReducer } from 'react';

// function useSpeakerDataManager() {
//   const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
//     isLoading: true,
//     speakerList: [],
//   });

//   function toggleSpeakerFavorite(speakerRec) {
//     const updateData = async function () {

//       // url of rest service
//       axios.put(`/api/speakers/${speakerRec.id}`, {
//         ...speakerRec,
//         favorite: !speakerRec.favorite,
//       });
//       speakerRec.favorite === true
//         ? dispatch({ type: 'unfavorite', id: speakerRec.id })
//         : dispatch({ type: 'favorite', id: speakerRec.id });
//     };
//     updateData();
//   }
//   useEffect(() => {
//     const fetchData = async function () {
//       let result = await axios.get('/api/speakers');
//       dispatch({ type: 'setSpeakerList', data: result.data });
//     };
//     fetchData();
//     return () => {
//       console.log('cleanup');
//     };
//   }, []);
//   return { isLoading, speakerList, toggleSpeakerFavorite };
// }
// export default useSpeakerDataManager;