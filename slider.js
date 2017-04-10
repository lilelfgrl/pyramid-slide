function findInputs() {

    var heightStr = document.getElementById("height").value;
    document.getElementById("user-number").innerHTML = heightStr;

    var character = document.getElementById("brick").value;

    height = parseInt(heightStr);

    drawPyramid(height, character);

}

var heightSelect = document.getElementById("height");
heightSelect.addEventListener("input", findInputs);

var brick = document.getElementById("brick");
brick.addEventListener("change", findInputs);

findInputs();

 function drawPyramid(height, character) {

    document.getElementById("pyramid").innerHTML = "";
     for (var row = 0; row < height; row++) {

         var brickNum = row + 2;
         var spaceNum = height - row - 1;

         var rowStr = "";
         for (var i = 0; i < spaceNum; i++) {
             rowStr += "\xa0";
         }
         for (var i = 0; i < brickNum; i++) {
             rowStr += character;
         }

        textElem = document.createTextNode(rowStr);

        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        document.getElementById("pyramid").appendChild(rowElem);
    }
}
