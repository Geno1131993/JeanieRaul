function populate_icons(){
    //Carpet cleaning
    $("#carpets").append(image_button("Carpets"));

    //Cleaning Services
    $("#houses").append(image_button("Cleaning"));

    //Maintenance
    $("#maintenance").append(image_button("Hammer"));

    //Painting
    $("#painting").append(image_button("Paint"));

    let overview_text = `
        Welcome to Jeanie and Raul's Maintenance and Carpet Cleaning Services!</br></br>

        We've been family-owned and operated in Josephine County since 1995. We are skilled licensed and bonded professionals, offering services in carpet cleaning, move-out cleaning of vacant units, indoor and outdoor painting, and maintenance services.
    `;


    let questions_text = `
        </br></br>
        Have questions about our services? Need a quote?</br></br>
        Call us to ask for a quote or a breakdown of the services we offer!
    `;

    $("#overview_text").append(text(overview_text));
    $("#overview").append(card("Raul Orozco", "(541)474-1334", "Owner"));
    $("#overview").append(card("Jeanie Orozco", "(541)474-1334", "Owner"));

    $("#questions").append(image_icon("Question"));
    $("#questions").append(text(questions_text));

}


function image_button(name){
    return `<img src = "./assets/images/${name}.png" class = "button-image">`;
}



function image_icon(name){
    return `<img src = "./assets/images/${name}.png" class = "icon-image">`;

}



function image_jpg(name){
    return `<img src = "./assets/images/${name}.jpg" class = "card-image">`;
}


function text(body){
    return `<p> ${body} </p>`;
}



function card(name, phone, title){
    return `
    <div class = "card">
        <p class = "card_name">${name}</p>
        <div class = "tile is-horizontal">
            <div class = "tile is-4">
                ${image_jpg(name)}
            </div>
            <div class = "article is-8">
                <p class = "card_text" id = "position"> ${title} </p>
                <p class = "card_text" id = "phone"> ${phone} </p>
            </div>
        </div>
    </div>
    `;
}


populate_icons();