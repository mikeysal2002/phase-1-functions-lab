// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hq = 42;
    if(pickupLocation < hq){
        return (hq - pickupLocation);
    }
    else{
        return (pickupLocation - hq);
    }

}

function distanceFromHqInFeet(pickupLocation){
   return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(a, b){
    if (b>a){
        return((b-a)*264);
      }
      else
        return((a-b)*264);
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
}
}