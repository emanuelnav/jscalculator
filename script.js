// Arrow Functions

// Square
const squarePerimeter = squareSide => squareSide * 4;
const squareArea = squareSide => squareSide ** 2;

// Triangle
const trianglePerimeter = (triangleSide1, triangleSide2, triangleBase) => triangleSide1 + triangleSide2 + triangleBase;
const triangleArea = (triangleBase, triangleHeight) => (triangleBase * triangleHeight) / 2;

// Circle
const circleCircumference = circleRadius => Math.PI * (circleRadius * 2);
const circleArea = circleRadius => Math.PI * (circleRadius ** 2);

function calculateSquareArea() {
    const input = document.getElementById("squareSide");
    return alert(squareArea(input.value));
}

function calculateSquarePerimeter() {
    const input = document.getElementById("squareSide");
    return alert(squarePerimeter(input.value));
}