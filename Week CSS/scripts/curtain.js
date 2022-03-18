function myFunction() {
    var x, text;
    x = document.getElementById("numb").value;

    text = "https://restcountries.eu/rest/v2/name/";
    text += x;


    var list = document.getElementById("root");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    /*----------------*/
    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);

    var request = new XMLHttpRequest();
    request.open('GET', text, true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const h3 = document.createElement('h3');
                h3.textContent = movie.name;

                const p1 = document.createElement('p');
                p1.textContent = movie.alpha2Code;
                const p2 = document.createElement('p');
                p2.textContent = movie.subregion;
                const p3 = document.createElement('p');
                p3.textContent = movie.capital;
                const logo = document.createElement('img');
                logo.src = movie.flag;

                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(logo);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = ':( it is not working!';
            app.appendChild(errorMessage);
        }
    }
    request.send();

}