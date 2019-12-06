import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


const PlayerCard = ({ player }) => {
  return(
    <div>
      <p>{player.name}</p>
      <p>{player.country}</p>
      <p><SearchIcon color="primary" fontsize="small" />{player.searches}</p>
    </div>
  )
}

export default PlayerCard;