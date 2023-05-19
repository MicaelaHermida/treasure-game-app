const WIDTH = 600;
const HEIGHT = 401;

let images = [
    './img/beach-rocks.jpg',
    './img/beach.jpg',
    './img/mountain-beach.jpg'
]

changeImage();

let target = {
    treasureX: generateRandom(WIDTH),
    treasureY: generateRandom(HEIGHT)
}


let map = document.getElementById('map');
let docDistance = document.getElementById('distance');
let clicks = 0;
map.addEventListener('click', function (e){
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    docDistance.innerHTML = `<h1>${distanceHint}<\h1>`;
    
    if(distance < 40){
        alert(`YOU HAVE FOUNT THE TREASURE IN ${clicks} CLICKS!`);
        location.reload();
    }
})
function changeImage(){
    let imgElement = document.createElement('img');
    imgElement.src = images[generateRandom(images.length)];
    imgElement.width = 600; 
    imgElement.height = 401;
    imgElement.id = "map";
    imgElement.draggable = false;
    imgElement.style = "border-radius: 6px; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.503);";
    document.body.appendChild(imgElement);
}


function generateRandom(limit){
    let rand = Math.random() * limit;
    console.log(rand);
    return Math.floor(rand);
}



let getDistance = (e, target) => {
    let differenceX = e.offsetX - target.treasureX;
    let differenceY = e.offsetY - target.treasureY;
    return Math.sqrt((differenceX * differenceX) + (differenceY*differenceY));
}

let getDistanceHint = distance => {
    if(distance < 50){
        return "Boiling Hot!";
    }
    else if(distance < 80){
        return "Really Hot!";
    }
    else if(distance < 120){
        return "Hot!";
    }
    else if(distance < 180){
        return "Warm!";
    }
    else if(distance < 300){
        return "Cool...";
    }
    else if(distance < 400){
        return "Cold!";
    }
    else if(distance < 500){
        return "Really Cold!";
    }
    else{
        return "Freezing!";
    }
}

console.log('x: ' + target.treasureX + ' y: ' + target.treasureY);
console.log(clicks);