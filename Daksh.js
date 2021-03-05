function Mobole(d1,d2) {
    if (d1.x - d2.x < d2.width/2 + d1.width/2
      && d2.x - d1.x < d2.width/2 + d1.width/2
      && d1.y - d2.y < d2.height/2 + d1.height/2
      && d2.y - d1.y < d2.height/2 + d1.height/2) {
  return true;
      }
  else {
    return false;
  }
  }