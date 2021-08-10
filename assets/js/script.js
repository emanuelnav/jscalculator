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

function calculateSquarePerimeter() {
    let side = (document.getElementById("squareSide")).value;
    return alert(squarePerimeter(Number(side)));
}

function calculateSquareArea() {
    let side = (document.getElementById("squareSide")).value;
    return alert(squareArea(Number(side)));
}

function calculateTrianglePerimeter() {
    let side1 = (document.getElementById("triangleSide1")).value;
    let side2 = (document.getElementById("triangleSide2")).value;
    let base = (document.getElementById("triangleBase")).value;
    return alert(trianglePerimeter(Number(side1), Number(side2), Number(base)));
}

function calculateTriangleArea() {
    let base = (document.getElementById("triangleBase")).value;
    let height = (document.getElementById("triangleHeight")).value;
    return alert(triangleArea(Number(base), Number(height)));
}

