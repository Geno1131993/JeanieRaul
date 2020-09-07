function populate_icons(){
    //Carpet cleaning
    $("#carpets").append(image("Carpets"));

    //Cleaning Services
    $("#houses").append(image("Cleaning"));

    //Maintenance
    $("#maintenance").append(image("Hammer"));

    //Painting
    $("#painting").append(image("Paint"));


    console.log("From script.");

}


function image(name){
    return `<img src = "./assets/images/${name}.png" class = "icon-image">`;
}


populate_icons();