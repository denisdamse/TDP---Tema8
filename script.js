function setup()
{
    createCanvas(761,431);
    let button = createButton("change colors");
    button.mousePressed(randomColors);
    
}
function draw()
{
    boxes();
    
}
let box={
    dimension:100,
    fullDimension:110,
    valoare:1,
};

function boxes()
{
    box.valoare=1;
    for(j=0;j<4;j++)
    {
        for(i=0;i<7;i++)
        {
            
            rect(i*box.fullDimension,j*box.fullDimension,box.dimension,box.dimension);
            text(box.valoare,i*box.fullDimension+box.dimension/2,j*box.fullDimension+box.dimension/2);
            box.valoare++;
        } 
    }
}
function randomColors()
{
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r,g,b);
}