function afterStart() {
  document.getElementById( "getArea" ).addEventListener( "click", getArea );
  document.getElementById( "radius" ).addEventListener( "keyup", styleColor );
  document.getElementById( "distance" ).addEventListener( "mousemove", styleBackgroundColor );

  document.getElementById( "moreRed" ).addEventListener( "mousemove", changeRed );
  document.getElementById( "moreRed" ).addEventListener( "click", changeRed );
  document.getElementById( "moreGreen" ).addEventListener( "click", changeGreen );
  document.getElementById( "moreBlue" ).addEventListener( "click", changeBlue );
  document.getElementById( "moreRed" ).addEventListener( "wheel", wheel );
  document.getElementById( "moreGreen" ).addEventListener( "wheel", wheel );
  document.getElementById( "moreBlue" ).addEventListener( "wheel", wheel );
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
