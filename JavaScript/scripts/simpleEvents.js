var list = [];
list.push( "Jacobi" );
list.push( "Dinesh" );
list.push( "Miguel" );
list.push( "Vernon" );
list.push( "Byron" );
list.push( "Brian" );
list.push( "Gary" );

var names = ['Java', 'C#', 'JavaScript'];

var nums = [3,4,56,34,45,678,234,324,67,465,234,546,2];

function callMe1() {  showList(list);  }
function callMe2() {  showList(names); }

function callMe3() {  sortList(list);  }
function callMe4() {  sortList(names); }

function callMe5() {  sortList(nums);  }

function showList ( anyList ) {
  textDiv.innerHTML = "";
  textDiv.innerHTML += "Biggest: " + getMax(anyList) + "<BR>";
  for ( i = 0; i < anyList.length; i++ ) {
    console.log(anyList[i]);
    textDiv.innerHTML += anyList[ i ] + "<br>";
  }
  textDiv.innerHTML += "Shortest: " + getShort(anyList) + "<BR>";
}

function getShort(anyList) {
  let max = anyList[0];
  for (var i = 0; i < anyList.length; i++) {
    if (max.length > anyList[i].length) {
      max = anyList[i];
    }
  }
  return max;
}


function getMax(anyList) {
  let max = '';
  for (var i = 0; i < anyList.length; i++) {
    if (max < anyList[i]) {
      max = anyList[i];
    }
  }
  return max;
}

function sortList ( anyList ) {
  anyList.sort();
  showList(anyList);
}

function afterStart() {
  textDiv = document.getElementById( 'text' );
  document.getElementById( "getArea" ).addEventListener( "click", getArea );
  document.getElementById( "radius" ).addEventListener( "keyup", styleColor );
  document.getElementById( "distance" ).addEventListener( "mousemove", styleBackgroundColor );

  document.getElementById( "moreRed" ).addEventListener( "click", changeRed );
  document.getElementById( "moreGreen" ).addEventListener( "click", changeGreen );
  document.getElementById( "moreBlue" ).addEventListener( "click", changeBlue );
  document.getElementById( "moreRed" ).addEventListener( "wheel", wheel );
  document.getElementById( "moreGreen" ).addEventListener( "wheel", wheel );
  document.getElementById( "moreBlue" ).addEventListener( "wheel", wheel );

  document.getElementById( "doIt" ).addEventListener( "click", doIt );

  var btn = document.getElementById( "body" );
  btn.addEventListener( "mousemove", move );
}

function doIt() {
  var test = document.getElementById( "test" );
  var output = document.getElementById( "output" );
  // var num = parseInt(test.value);
  switch ( test.value ) {
    case "clear":
      output.innerHTML = "";
      break;
    case "hello":
      output.innerHTML += "hello to you";
    case "bye":
      output.innerHTML += "CU tomorrow";
      break;
    case "time":
      output.innerHTML += new Date();
      break;
    default:
      output.innerHTML += "huh?";
      break;
  }
  if ( test.value == "hello" ) {
    output.innerHTML = "Well hello to you";
  } else if ( test.value == "bye" ) {
    output.innerHTML = "See you tomorrow";
  } else if ( test.value == "time" ) {
    output.innerHTML = new Date();
  } else {
    output.innerHTML = "I don't understand";
  }
}

function move( event ) {
  let DegC = document.getElementById( 'DegC' );
  DegC.innerHTML = "X: " + event.x + " Y: " + event.y;
}

function wheel( event ) {
  let color = event.path[ 0 ].id.toLowerCase().substring( 4 );
  changeColor( color, Math.floor( event.wheelDeltaY / 20 ) );
}

var chgColor = {
  red: 0,
  green: 0,
  blue: 0
};

function changeRed( event ) {
  changeColor( 'red', 16 );
}

function changeGreen( event ) {
  changeColor( 'green', 16 );
}

function changeBlue( event ) {
  changeColor( 'blue', 16 );
}

function changeColor( color, amount ) {
  chgColor[ color ] += amount;
  chgColor[ color ] %= 256;
  setColor();
}

function setColor() {
  let newColor = 'rgb(' + Math.abs( chgColor[ 'red' ] ) + ',' + Math.abs( chgColor[ 'green' ] ) + ',' + Math.abs( chgColor[ 'blue' ] ) + ')';
  document.body.style.backgroundColor = newColor;
  var eArea = document.getElementById( 'area' );
  eArea.innerHTML = newColor;
}

function styleBackgroundColor( event ) {
  let field1 = document.getElementById( 'distance' );
  let newColor = getColor();
  field1.innerHTML = newColor;

  var eArea = document.getElementById( 'area' );
  eArea.innerHTML = "My Mouse is at X: " + event.x + " and Y: " + event.y;
}

function getArea() {
  radius = document.getElementById( 'radius' ).value
  var area = circleArea( radius );
  var eArea = document.getElementById( 'area' );
  eArea.innerHTML = "Circle with radius " + radius +
    " has area " + area.toFixed( 2 );
}

function circleArea( radius ) {
  area = radius * radius * Math.PI;
  return area; //  Math.pow(radius,2) * Math.PI;
}

function styleColor() {
  let field1 = document.getElementById( 'radius' );
  let newColor = getColor();
  field1.innerHTML = newColor;
  field1.style.color = newColor;
}

function getColor() {
  let newColor = '#';
  for ( var i = 0; i < 6; i++ )
    newColor += '0123456789ABCDEF' [ randInRange( 16 ) ]
  return newColor;
}

function randInRange( range ) {
  var myNum = Math.random() * range;
  return Math.floor( myNum );
}
