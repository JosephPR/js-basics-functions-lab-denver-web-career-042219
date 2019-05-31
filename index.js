// Code your solution in this file!
function distanceFromHqInBlocks(num){
  let ts = 42
    return Math.abs(num - ts)
};

function distanceFromHqInFeet(num1) {
  return distanceFromHqInBlocks(num1) * 264
};

function distanceTravelledInFeet(num1, num2) {
return Math.abs((num1 * 264)-(num2 * 264))
};
