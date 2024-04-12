// Funções:

function getResolution()
{

    if(window.innerWidth >= 1250)
    {

        document.getElementById("container").style.display = "none";

        window.location.assign("https://PabloValentin94.github.io/Index.html");

    }

    else
    {

        document.getElementById("container").style.display = "flex";

    }

}

// Eventos:

window.onload = () => {

    getResolution();

};

document.body.onresize = () => {

    getResolution();

}