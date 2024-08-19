// variables
let qury = "india";
const apiKey = 'cd7a3b49af094e0d8ca52472ebd5918d';
const url = `https://newsapi.org/v2/everything?q=${qury}&from=2024-07-19&sortBy=publishedAt&apiKey=${apiKey}&c`;
let windowIsLoaded = false;

function openclose() {
  const navbar = document.getElementById("NavBar");
  if (navbar.style.width = "0") {
    navbar.style.width = "250px";
  } else if (navbar.style.width = "250px") {
    navbar.style.width = "0";
    
  }
  navbar.querySelector("li").style.opacity = '1';
}

document.querySelector(".close").addEventListener('click', () => {
  const navbar = document.getElementById("NavBar");
  navbar.style.width = '0';
  navbar.querySelector("li").style.opacity = '0';
});




async function fetchTeslaNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
            displayNews(data.articles);
        } else {
            document.getElementById('news-container').innerHTML = 'No news found.';
        }
        windowIsLoaded = true;
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-container').innerHTML = 'Error fetching news.';
        windowIsLoaded = false;
    }
}

function error() {
  document.getElementById("Image").style.display = "none";
}

function displayNews(articles) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    articles.forEach(article => {
      if (!article.urlToImage) return error();
        const articleElem = document.createElement('div');
        articleElem.innerHTML = `
        <div class="FlexBox"> 
          <img id="Image" src="${article.urlToImage}" >
        <div class="Box">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a class="links" href="${article.url}" target="_blank">Read more</a>
            </div>
         </div>
        `;
        container.appendChild(articleElem);
    });
}



window.onload = () => {
    document.querySelector("main").style.opacity = "1";
      document.querySelector(".loder").style.opacity = "0";
}


function General() {
  
}

function LoadNews() {
    windowIsLoaded = true;
    loderSpinner(document.getElementById("news-container"))
  }

// Fetch news when the page loads
LoadNews();
fetchTeslaNews();




function loder(divName) {
  const loaderdiv = document.createElement('div');
  loaderdiv.classList.add("Preloader")
  loaderdiv.innerHTML = `
  
  
  `;
  divName.appendChild(loaderdiv);
}

function loderSpinner(divName) {
loder(divName);
}
