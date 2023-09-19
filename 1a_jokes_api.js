window.onload = function () {
    document.getElementById('btn').addEventListener("click", jokes);

    async function jokes() {
        const container = document.getElementById("container");
        var joke = undefined;
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            joke = await response.json();

        } catch (error) {
            container.innerHTML = "Error in Fetching Joke: " + error.message;
            console.log("Error: ", error);
            return;
        }
 

        // console.log(joke.setup);
        // console.log(joke.delivery);
        if (joke.setup == undefined) {
            let div = document.createElement('div');
            div.className = "joke"
            div.innerHTML ="Error in Fetching Joke";
            container.appendChild(div);
            return;
        }

        let div = document.createElement('div');
        div.className = "joke";
        let div1 = document.createElement('div');
        div1.className = "setup";
        div1.innerHTML = joke.setup;

        let div2 = document.createElement('div');
        div2.className = "delivery";
        div2.innerHTML = joke.delivery;

        div.appendChild(div1);
        div.appendChild(div2);



        container.appendChild(div);
    }
}