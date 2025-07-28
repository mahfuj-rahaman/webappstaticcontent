var canvas = document.getElementById('Canvas');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var context = canvas.getContext("2d");

var centerX = canvasWidth / 2;
var centerY = canvasHeight / 2;
var radius = 70;

// Map sprite
var mapSprite = new Image();
mapSprite.src = "https://rmgapi.mahfuj.site//Files////ProductTypeFiles//ALL-ec3fb4f3-743d-45dc-ad80-6cf3900271cf-image.jpg";

var Marker = function () {
    this.Sprite = new Image();
    //this.Sprite.src = "red-dot.png"
    this.Width = 10;
    this.Height = 10;
    this.XPos = 0;
    this.YPos = 0;
    this.Color = 0;
    this.BorderColor = 0;
}

var Markers = new Array();

// var mouseClicked = function (mouse) {
//     // Get corrent mouse coords
//     var rect = canvas.getBoundingClientRect();
//     var mouseXPos = (mouse.x - rect.left);

//     var mouseYPos = (mouse.y - rect.top);

//     //console.log("Marker added");

//     // Move the marker when placed to a better location
//     var marker = new Marker();
//     marker.XPos = mouseXPos - (marker.Width / 2);
//     marker.YPos = mouseYPos - marker.Height;
//     console.log(+marker.XPos+ ","+marker.YPos);


//     Markers.push(marker);
// }

// Add mouse click event listener to canvas
//canvas.addEventListener("mousedown", mouseClicked, false);

var firstLoad = function () {
    context.font = "15px Georgia";
    context.textAlign = "center";
}

firstLoad();

var main = function () {
    draw();
    updateMarker();

    //updateCanvas(180, 100.86666488647461);
    //drawCircle();
};

var draw = function () {
    // Clear Canvas
    context.fillStyle = "#000";
    //context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw map
    // Sprite, X location, Y location, Image width, Image height
    // You can leave the image height and width off, if you do it will draw the image at default size
    context.drawImage(mapSprite, 0, 0, canvasWidth, canvasHeight);

    // Draw markers
    for (var i = 0; i < Markers.length; i++) {
        var tempMarker = Markers[i];
        // Draw marker
        //context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);

        drawCircle(tempMarker.XPos, tempMarker.YPos, 10, tempMarker.color);

        // Calculate postion text
        // var markerText = ""; //"" + tempMarker.XPos + "," + tempMarker.YPos;

        // // Draw a simple box so you can see the position
        // var textMeasurements = context.measureText(markerText);
        // context.fillStyle = "#666";
        // context.globalAlpha = 0.7;
        // context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        // context.globalAlpha = 1;

        // // Draw position above
        // context.fillStyle = "#000";
        // context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
    }
};




function drawCircle(x, y, radious, color) {
    context.beginPath();
    context.arc(x, y, radious, 1, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 0;
    context.strokeStyle = color;
    context.stroke();
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function updateCanvas(x, y, color) {

    var marker = new Marker();

    //marker.XPos = x - (marker.Width / 2);
    //marker.YPos = y - marker.Height;
    marker.XPos = x;
    marker.YPos = y;
    marker.color = color;
    //console.log(+marker.XPos + "," + marker.YPos);


    Markers.push(marker);

    // context.putImageData(canvasData, 0, 0);
}
function updateMarker() {


    Markers = [];

    let arr = [

        'COIN POCKET OVERLOCK',
        'COIN POCKET  ROLLING',
        'COIN POCKET  JOINT',
        'INTRRLOCK',
        'POCKET BAG OVERLOCK',
        'POCKET BAG 1/4 STITCH',
        'WASH TACK',
        'POCKET BAG JOINT',
        'FRONT POCKET ROLLING',
        'FRONT POCKET  TACK',
        'FLY OVERLOCK',
        'ZIPPER JOINT',
        'FLY JOINT TOP STITCH',
        'FLY ( J ) STITCH',
        'D/ FLY JOINT',
        'LEFT & RIGHT JOINT',
        'LEFT & RIGHT TOP STITCH',
        'FRONT RISE CLOSE',
        'SIDE OVERLOCK',
        'LABEL JOINT',
    ]
    let element = $('#heat-map-op-issue');
    element.empty();
    let opIssue = '';
    //for (var i = 0; i < 2; i++) {

    let item = arr[0];
    var randomColor = random_rgba();
    console.log(randomColor);


    $.ajax({
        url: 'http://localhost:5180/DashJson/GetHeatMapData/',
        type: "GET",
        traditional: true,
        success: function (result) {
            console.log(result);
            if (result.Success) {

                console.clear();
                console.log(result.Payload.HeatMapPositions);
                let position = result.Payload.HeatMapPositions[0]
                let ranX = position.X;
                let ranY = position.Y;
                updateCanvas(ranX, ranY, randomColor);
               
            }
        },
        error: function (error) {
            //alert("Something went wrong call the police");
        }
    });


  

    //opIssue += '<tr>';
    //opIssue += '<td>';
    //opIssue += item;
    //opIssue += '</td>';

    //opIssue += '<td>';
    //opIssue += '<div class="color-div" style="background-color: ' + randomColor + '; ">  </div > ';
    //opIssue += '</td>';

    //opIssue += '<tr>';
    //element.append(opIssue);
    console.log(element.innerHTML);
    //}



}


//main();
main();
setInterval(main, (100000000 / 2)); // Refresh 60 times a second
//setInterval(main, (10000)); // Refresh 60 times a second

function getHeatmapCordinates() {


}
