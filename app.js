const container = document.querySelector(".container");
const orders = [

                    {
                        id: 1,
                        pizza: "Hawaii",
                        extra: "Kukrica",
                        ital: "Pepsi zero",
                        ar: 1500,
                        kep: "https://images.pexels.com/photos/7813573/pexels-photo-7813573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    },
                    {
                        id: 2,
                        pizza: "Salami",
                        extra: "Bacon",
                        ital: "7Up",
                        ar: 1700,
                        kep: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
                    },
                    {
                        id: 3,
                        pizza: "Bacon",
                        extra: "Chicken",
                        ital: "Coca Cola",
                        ar: 2000,
                        kep: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    },
                    {
                        id: 4,
                        pizza: "Meat Lover",
                        extra: "No extra",
                        ital: "Canada Dry",
                        ar: 2500,
                        kep: "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    },
                    {
                        id: 5,
                        pizza: "SonGoKu",
                        extra: "Cheese",
                        ital: "Fanta",
                        ar: 1700,
                        kep: "https://images.pexels.com/photos/7813578/pexels-photo-7813578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    },
                    {
                        id: 6,
                        pizza: "Salami",
                        extra: "Bacon",
                        ital: "7Up",
                        ar: 1700,
                        kep: "https://images.pexels.com/photos/12645186/pexels-photo-12645186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }

            ]

function getOrders(){

    let content = "";
    orders.map(result => {
        content += `<div id="card">
                    <h5>ID: ${result.id}</h5>
                    <h1>${result.pizza}</h1>
                    <h2>${result.extra}</h2>
                    <h2>${result.ital}</h2>
                    <h3>Ár: ${result.ar} Forint</h3>
                    <img src="${result.kep}" alt="">
                    </div>`;
        container.innerHTML = content;
    });

}

window.addEventListener("load", getOrders);
