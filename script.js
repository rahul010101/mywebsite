document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var searchQuery = document.getElementById("searchQuery").value;
    var filetype = document.getElementById("filetype").value;

    // Construct the search query
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
    if (filetype) {
        searchUrl += " filetype:" + filetype;
    }

    // Open the constructed search URL in a new tab
    window.open(searchUrl, '_blank');
});
