const container = document.querySelector('.container');
const coffees = [
  { name: "Perspiciatis", image: "https://images.unsplash.com/photo-1521435363116-afc12e01b5d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Voluptatem", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Explicabo", image: "https://images.unsplash.com/photo-1530032582480-edd739014c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Rchitecto", image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: " Beatae", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: " Vitae", image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Inventore", image: "https://images.unsplash.com/photo-1528697203043-733dafdaa316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Veritatis", image: "https://images.unsplash.com/photo-1522726336270-3a0053210f06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" },
  { name: "Accusantium", image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1362&q=80" },
];

const showCoffes = () => {
  let output = '';
  coffees.forEach(
    ({ name, image }) => 
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffes);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
}