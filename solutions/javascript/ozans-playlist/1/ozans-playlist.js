// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


export function removeDuplicates(playlist) {
return [...new Set(playlist)];
  
}


export function hasTrack(playlist, track) {
  return playlist.includes(track);
  }


export function addTrack(playlist, track) {
 if (!playlist.includes(track)) {
   playlist.push(track);
   
 }
  return playlist;
}


export function deleteTrack(playlist, track) {
    const index = playlist.indexOf(track);
  if (index != -1) {
    playlist.splice(index, 1);
    
  }
  return playlist;
}



export function listArtists(playlist) {
  const artists = playlist.map(track => track.split(' - ')[1]);
  return [...new Set(artists)];
}
