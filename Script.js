const AccessKey = "zztQwH2CKJkLqyQ_JWqcIPR5VS3K0733m5yRjo31_88";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');


let keyWord = "";
let page = 1;


async function searchImage() {
    keyWord = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${AccessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    if(page === 1) {
        searchResult.innerHTML="";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    }
    )
    showMoreBtn.style.display ="block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click" ,() => {
    page++;
    searchImage();
})
