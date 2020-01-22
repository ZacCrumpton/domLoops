console.log("HelloWorld!")

const dinosaurs = [
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'raptor', name: 'Eugene'}
];

//building cards for each dinosaur

//function that loops through dino array

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurCard = () => {
    let domString = ''; 
    for(let i = 0; i < dinosaurs.length; i++) {
        //console.log(dinosaurs[i])
        domString += '<div class="dinosaur">';
        domString +=    `<h3>${dinosaurs[i].type}</h3>`
        domString +=    `<p>Name: ${dinosaurs[i].name}</p>`
        domString += '</div>'
    }
    // console.log('domString', domString)
    // const selectedDiv = document.getElementById('dino-barn');
    // selectedDiv.innerHTML = domString;
    printToDom('dino-barn', domString);
};


buildDinosaurCard();