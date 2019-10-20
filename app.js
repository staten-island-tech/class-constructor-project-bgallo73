//one class to create the object person, album, movie  ****Model
class Country{
    constructor(name, population, continent) {
        this.name = name;
        this.population = population;
        this.continent = continent;
    }
}

//take arguments
//****View */ class for the UI which contains methods
class UI {

    //get values
    addCountryToList(country) {
        const display = document.querySelector('.display');

        let html = '<div class="display-country"> <div class="display-name"> %name% </div> <div class="display-population"> %population% </div> <div class="display-continent"> %continent% </div> <div class="remove-country"> REMOVE COUNTRY </div> </div>'
        let newHtml = html.replace('%name%', country.name);
        newHtml = newHtml.replace('%population%', country.population);
        newHtml = newHtml.replace('%continent%', country.continent);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }

    //clear fields method
    clearFields(){
        form.reset();
    }

    //remove something/object
    removeCountry(target){
        if (target.className === 'remove-country') {
            target.parentElement.remove();
        }
    } 
}

//event listener
document.getElementById('form').addEventListener('submit', function(e){
    //get values
    const name = document.getElementById('name').value;
    const population = document.getElementById('population').value;
    const continent = document.getElementById('continent').value;

    //instantiate new class
    const country = new Country(name, population, continent);
    console.log(country);

    const ui = new UI();
    console.log(ui);

    ui.addCountryToList(country);

    ui.clearFields();

    e.preventDefault();

    ui.removeCountry(e.target);
})

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeCountry(e.target);

    ui.clearFields();

    e.preventDefault();
})

//creates the html for the UI DISPLAY

//controller combines ui and model

//event handler with function


//instantiate new class/object with variable name

//instantiate new UI const ui = new UI()

//call relevent methods */