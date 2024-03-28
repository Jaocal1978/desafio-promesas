//Fetch API

const consultarDatos = async () => 
{
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const response = await fetch(url);
        const datos = await response.json();
        console.log(datos);
        let titulos;
        let data;
        let title = "";

        for(let i = 1; i <= 20; i++) 
        {
            titulos = `${i} - ${datos[i].title}`;
            data = await resolverenTiempo(titulos);
            console.log(data);

            title += `
                <h4>${data}</h4>
            `;

            document.querySelector('#lista').innerHTML = title;
            
        }
        
    } catch (error) {
        console.log("ERROR: ", error);
    }
    
};

consultarDatos();

async function resolverenTiempo(x) 
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 3000);
    });
}


