import React, { useContext } from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';
import useSpeakerDataManager from './useSpeakerDataManager';
import { FavoriteClickCountContext } from './FavoriteClickCountContext';

const SpeakerDetail = React.memo(({ speakerRec, onHeartFavoriteHandler }) => {
  const { id, firstName, lastName, bio, favorite } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

  const { incrementFavoriteClickCount } = useContext(FavoriteClickCountContext);

  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, speakerRec);
              incrementFavoriteClickCount();
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>

        <span>{bio}</span>
      </div>
    </div>
  );
});

export default SpeakerDetail;



//old code

// import React from 'react';
// import ImageToggleOnScroll from './ImageToggleOnScroll';

// const SpeakerDetail = React.memo(({ speakerRec, onHeartFavoriteHandler }) => {
//   const { id, firstName, lastName, bio, favorite } = speakerRec;
//   //it will tell us everytime when a peakerdetail rerenders 

//   console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);

//   return (
//     <div className="card col-4 cardmin">
//       <ImageToggleOnScroll
//         className="card-img-top"
//         primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
//         secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
//         alt="{firstName} {lastName}"
//       />
//       <div className="card-body">
//         <h4 className="card-title">
//           <button
//             className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
//             onClick={(e) => {
//               onHeartFavoriteHandler(e, speakerRec);
//             }}
//           />
//           <span>
//             {firstName} {lastName}
//           </span>
//         </h4>

//         <span>{bio}</span>
//       </div>
//     </div>
//   );
// });

// export default SpeakerDetail;