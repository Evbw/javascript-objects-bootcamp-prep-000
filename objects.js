var playlist = {musician:'song'}

function updatePlaylist (obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist (obj, key) {
  delete key
  return obj
}