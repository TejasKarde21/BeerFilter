let currentPage = 1;
let totalPages = 6; // Assuming there are 6 pages in total

// Function to update the page slider value
function updatePageSlider() {
    const pageSlider = document.getElementById('pageSlider');
    pageSlider.innerHTML = `<input type="range" min="1" max="${totalPages}" value="${currentPage}" id="pageRange">`;
}

// Function to fetch data for a specific page
async function fetchPageData(page) {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
    const data = await response.json();
    console.log(data);
    return data;
}



// Function to display products
function displayProducts(products) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
         <img class="beer-img" src=${product.image_url} alt="Beer Image"/>
         <h2>${product.name}</h2>
         <p>${product.first_brewed}</p>`;
        productListElement.appendChild(productElement);
    });
}

// Function to handle page change
function handlePageChange() {
    const pageRange = document.getElementById('pageRange');
    currentPage = parseInt(pageRange.value);
    loadProducts();
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadProducts();
        updatePageSlider();
    }
}

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        loadProducts();
        updatePageSlider();
    }
}

// // Initial load of products
async function loadProducts() {
    const data = await fetchPageData(currentPage);
    displayProducts(data);
}

// // Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updatePageSlider();

    document.getElementById('pageSlider').addEventListener('input', handlePageChange);
    document.getElementById('prevPage').addEventListener('click', prevPage);
    document.getElementById('nextPage').addEventListener('click', nextPage);
});

function handlePageChange(page) {
    currentPage = page;
    loadProducts();
}

// // Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    const pageButtons = document.querySelectorAll('.pageButton');
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            handlePageChange(parseInt(button.dataset.page));
        });
    });

    document.getElementById('prevPage').addEventListener('click', prevPage);
    document.getElementById('nextPage').addEventListener('click', nextPage);
});




// // Function to handle slider changes
function handleSliderChange() {
    const phValue = parseFloat(document.getElementById('phSlider').value);
    const srmValue = parseInt(document.getElementById('srmSlider').value);

    const filteredProducts = products.filter(product => {
        return product.ph >= phValue && product.srm >= srmValue;
    });

    displayProducts(filteredProducts);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updatePageSlider();

    const pageButtons = document.querySelectorAll('.pageButton');
    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            handlePageChange(parseInt(button.dataset.page));
        });
    });

     document.getElementById('prevPage').addEventListener('click', prevPage);
     document.getElementById('nextPage').addEventListener('click', nextPage);

    document.getElementById('phSlider').addEventListener('input', handleSliderChange);
     document.getElementById('srmSlider').addEventListener('input', handleSliderChange);
});


// ... (previous code) ...

// Function to handle ABV slider changes
function handleAbvSliderChange() {
    const abvValue = parseFloat(document.getElementById('abvSlider').value);
    document.getElementById('abvValue').textContent = abvValue;
    loadProducts(abvValue);
}

// Function to fetch data for a specific page and ABV value
async function fetchPageDataWithAbv(page, perPage, abv) {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}&abv_gt=${abv}`);
    const data = await response.json();
    return data;
}
 

const containers = document.querySelectorAll(".range-slider");

containers.forEach(container => {
    const slider = container.querySelector(".slider");
    const thumb = container.querySelector(".slider-thumb");
    const tooltip = container.querySelector(".tooltip");
    const progress = container.querySelector(".progress");

    function customslider() {
        const maxval = slider.getAttribute("max");
        const val = (slider.value / maxval) * 100 + "%";

        tooltip.innerHTML = slider.value;

        progress.style.width = val;
        thumb.style.left = val;
    }

    customslider();

    slider.addEventListener('input', () => {
        customslider();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Put the JavaScript code here.
    const sliderThumb = document.querySelector('.slider-thumb');
const tooltip = document.querySelector('.tooltip');

sliderThumb.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

sliderThumb.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

  });


  document.addEventListener('DOMContentLoaded', function() {
    // Put the JavaScript code here.
    const sliderThumb = document.querySelector('.sm-section .slider-thumb');
const tooltip = document.querySelector('.sm-section .tooltip');

sliderThumb.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

sliderThumb.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

  });


  document.addEventListener('DOMContentLoaded', function() {
    // Put the JavaScript code here.
    const sliderThumb = document.querySelector('.ph-section .slider-thumb');
const tooltip = document.querySelector('.ph-section .tooltip');

sliderThumb.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

sliderThumb.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

  });


  document.addEventListener('DOMContentLoaded', function() {
    const phCheckbox = document.getElementById('phvalue');
    const phSlider = document.querySelector('.ph-section .slider1');

    const srmCheckbox = document.getElementById('SRMvalue');
    const srmSlider = document.querySelector('.sm-section .slider1'); // Corrected selector
    phSlider.style.pointerEvents = "none";
    phCheckbox.addEventListener('change', function() {
        phSlider.style.pointerEvents = this.checked ? 'auto' : 'none';
    });

    srmSlider.style.pointerEvents="none";
    srmCheckbox.addEventListener('change', function() {
        srmSlider.style.pointerEvents = this.checked ? 'auto' : 'none';
    });
});

  
document.addEventListener('DOMContentLoaded', function() {
    const value = document.getElementById("searchInput");

    value.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const productListElement = document.getElementById('productList');
        productListElement.innerHTML = '';

        // Dynamically update the URL with the user's input
        let url = `https://api.punkapi.com/v2/beers?page=1&per_page=60&beer_name=${inputValue}`;

        // Fetch data from the updated URL
        fetch(url)
            .then(response => response.json())
            .then(data => { console.log(data);
                data.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img class="beer-img" src=${product.image_url} alt="Beer Image"/>
                        <h2>${product.name}</h2>
                        <p>${product.first_brewed}</p>`;
                    productListElement.appendChild(productElement);
                });
            })
            .catch(error => console.error('Error:', error));
    });
});


  
//reset button

var reset = document.getElementById("resetButton");

reset.addEventListener('click', function() {
    // Clear the search input value
    document.getElementById('searchInput').value = '';

    // Reload the page
    location.reload();
});


//get Value accourding to ph value
document.addEventListener('DOMContentLoaded', function() {
    const phCheckbox = document.getElementById('phvalue');
    const phSlider = document.querySelector('.ph-section .slider1');
    const productListElement = document.getElementById('productList');
    const paginationElement = document.getElementById('pagination');

    let currentPage = 1;

    function fetchProducts(phValue, page) {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(product => product.ph <= phValue);
                const startIndex = (page - 1) * 10;
                const endIndex = startIndex + 10;
                const paginatedData = filteredData.slice(startIndex, endIndex);

                productListElement.innerHTML = '';
                paginatedData.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img class="beer-img" src=${product.image_url} alt="Beer Image"/>
                        <h2>${product.name}</h2>
                        <p>${product.first_brewed}</p>`;
                    productListElement.appendChild(productElement);
                });

                // Update pagination
                const totalPages = Math.ceil(filteredData.length / 10);
                paginationElement.innerHTML = '';
                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.addEventListener('click', function() {
                        currentPage = i;
                        fetchProducts(phValue, currentPage);
                    });
                    paginationElement.appendChild(pageButton);
                }

                // If there are more than 10 products with the same pH, increase current page
                if (filteredData.length > 10 && paginatedData.length < 10) {
                    currentPage++;
                    fetchProducts(phValue, currentPage);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    phSlider.addEventListener('input', function() {
       
        const phValue = parseFloat(this.value);

        // Reset current page when slider is moved
        currentPage = 1;

        // Fetch products for the first page
        fetchProducts(phValue, currentPage);

        // Store the value in localStorage
        localStorage.setItem('phSliderValue', phValue);
    });

    // Check if pH checkbox is checked on page load
    if (phCheckbox.checked) {
        phSlider.style.pointerEvents = 'auto';
        const storedValue = localStorage.getItem('phSliderValue');
        if (storedValue) {
            phSlider.value = storedValue;
            fetchProducts(parseFloat(storedValue), currentPage);
        }
    } else {
        phSlider.style.pointerEvents = 'none';
    }
});
 

// get value according to srm

document.addEventListener('DOMContentLoaded', function() {
    const srmCheckbox = document.getElementById('SRMvalue');
    const srmSlider = document.querySelector('.sm-section .slider1');
    const productListElement = document.getElementById('productList');
    const paginationElement = document.getElementById('pagination');

    let currentPage = 1;

    function fetchProducts(srmValue, page) {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(product => product.srm == srmValue);
                const startIndex = (page - 1) * 10;
                const endIndex = startIndex + 10;
                const paginatedData = filteredData.slice(startIndex, endIndex);

                productListElement.innerHTML = '';
                paginatedData.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product');
                    productElement.innerHTML = `
                        <img class="beer-img" src=${product.image_url} alt="Beer Image"/>
                        <h2>${product.name}</h2>
                        <p>${product.first_brewed}</p>`;
                    productListElement.appendChild(productElement);
                });

                const totalPages = Math.ceil(filteredData.length / 10);
                paginationElement.innerHTML = '';
                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.addEventListener('click', function() {
                        currentPage = i;
                        fetchProducts(srmValue, currentPage);
                    });
                    paginationElement.appendChild(pageButton);
                }

                if (filteredData.length > 10 && paginatedData.length < 10) {
                    currentPage++;
                    fetchProducts(srmValue, currentPage);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    srmSlider.addEventListener('input', function() {
        console.log('SRM slider input event fired');
        const srmValue = parseFloat(this.value);
        console.log(srmValue);

        currentPage = 1;

        fetchProducts(srmValue, currentPage);

        localStorage.setItem('srmSliderValue', srmValue);
    });

    if (srmCheckbox.checked) {
        srmSlider.style.pointerEvents = 'auto';
        const storedValue = localStorage.getItem('srmSliderValue');
        if (storedValue) {
            srmSlider.value = storedValue;
            fetchProducts(parseFloat(storedValue), currentPage);
        }
    } else {
        srmSlider.style.pointerEvents = 'none';
    }
});



//get value according to greeter than
document.addEventListener('DOMContentLoaded', function() {
    const noneButton = document.getElementById('none');
    const greaterThanButton = document.getElementById('gt');
    const lowerThanButton = document.getElementById('lt');
    const slider = document.getElementById('val');
    const progress = document.querySelector('.progress');
    var slideval = slider.value;
     
    function fetchBeers(abvValue) {
        const url = `https://api.punkapi.com/v2/beers?page=1&per_page=60&abv_gt=${abvValue}`;
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const productListElement = document.getElementById('productList');
            productListElement.innerHTML = ''; // Clear previous content
            
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img class="beer-img" src=${product.image_url} alt="Beer Image"/>
                    <h2>${product.name}</h2>
                    <p>${product.first_brewed}</p>`;
                productListElement.appendChild(productElement);
            });
        })

        .catch(error => console.error('Error:', error));
}

    function handleButtonClick(event) {
        const abvValue = slider.value;
        const buttonId = event.target.id;

        noneButton.disabled = false;
        greaterThanButton.disabled = false;
        lowerThanButton.disabled = false;

        switch (buttonId) {
            case 'none':
                noneButton.disabled = true;
                slider.disabled = true;
                noneButton.style.background = "red";
                greaterThanButton.style.background = "transparent";
                lowerThanButton.style.background = "transparent";
                // Disable the slider
                break;
            case 'gt':
                greaterThanButton.disabled = true;
                slider.disabled = false; // Enable the slider
                noneButton.style.background = "transparent";
                greaterThanButton.style.background = "red";
                lowerThanButton.style.background = "transparent";
                break;
            case 'lt':
                lowerThanButton.disabled = true;
                slider.disabled = false; // Enable the slider
                greaterThanButton.style.background = "transparent";
                noneButton.style.background = "transparent";
                lowerThanButton.style.background = "red";
                break;
        }

        localStorage.setItem('abvValue', abvValue);
   
    }

    noneButton.addEventListener('click', handleButtonClick);
    greaterThanButton.addEventListener('click', handleButtonClick);
    lowerThanButton.addEventListener('click', handleButtonClick);

    slider.addEventListener('input', function() {
        progress.style.width = `${this.value}%`;

        if (this.value > 0 && this.value < 100) {
            noneButton.disabled = false;
            greaterThanButton.disabled = false;
            lowerThanButton.disabled = false;
        }
    });

    // Check if there's a stored value in local storage
    const storedAbvValue = localStorage.getItem('abvValue');
    if (storedAbvValue) {
        slider.value = storedAbvValue;
        fetchBeers(storedAbvValue);
    }
});









