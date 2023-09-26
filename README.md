# BeerFilter

Page Slider and Data Fetching:
updatePageSlider(): Updates a slider element for page navigation.
fetchPageData(page): Fetches beer data for a specific page from the API.
loadProducts(): Loads and displays beer products for the current page.
Displaying Products:

displayProducts(products): Renders beer products in the DOM.
Page Navigation:
prevPage(): Navigates to the previous page of beer products.
nextPage(): Navigates to the next page of beer products.
handlePageChange(page): Handles page changes triggered by buttons or slider.
Event Listeners:

Listens for DOMContentLoaded event and sets up initial page load and event bindings.
Filtering by pH and SRM:
handleSliderChange(): Filters products based on pH and SRM slider values.

ABV Slider and Filtering:
handleAbvSliderChange(): Handles changes in the ABV (Alcohol by Volume) slider.
fetchPageDataWithAbv(page, perPage, abv): Fetches data based on page and ABV value.
Custom Slider Functionality:

Customizes the appearance and behavior of sliders.
Tooltip Display:
Displays a tooltip when hovering over a slider thumb.
Checkbox Interaction:

Controls slider interaction based on checkbox states for pH and SRM.
Search Input:

Dynamically updates the URL and fetches data based on user input.
Reset Button:
Clears the search input and reloads the page.
Fetching Products Based on pH and SRM:
Fetches and displays products based on pH or SRM values.
Pagination:
Implements pagination functionality for filtered products.
ABV Filtering (Greater Than):
Filters products based on an ABV value greater than the specified threshold.
Button Click Handling:
Handles button clicks for ABV filtering options (None, Greater Than, Less Than).
Local Storage Usage:
Stores and retrieves values in local storage for persistent settings.
This code creates a dynamic web application that allows users to navigate through pages of beer products, filter them based on various criteria, and interact with sliders and checkboxes to refine their search. The code also ensures that user preferences are stored locally for a seamless experience across sessions.
