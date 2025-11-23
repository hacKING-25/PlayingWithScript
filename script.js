
        // 1. Load bookmarks from LocalStorage when page opens
        document.addEventListener('DOMContentLoaded', loadBookmarks);

        function saveBookmark() {
            // Get values from input boxes
            const name = document.getElementById('siteName').value;
            const url = document.getElementById('siteUrl').value;

            if(!name || !url) {
                alert('Please fill in both fields');
                return;
            }

            // Create a bookmark object
            const bookmark = { name: name, url: url };

            // Check if bookmarks exist in LocalStorage
            let bookmarks = [];
            if(localStorage.getItem('bookmarks') !== null) {
                bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            }

            // Add new bookmark to array
            bookmarks.push(bookmark);

            // Save back to LocalStorage
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Clear inputs and re-fetch bookmarks
            document.getElementById('siteName').value = '';
            document.getElementById('siteUrl').value = '';
            loadBookmarks();
        }

        function loadBookmarks() {
            // Get bookmarks from LocalStorage
            let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            let list = document.getElementById('bookmarksList');
            
            list.innerHTML = ''; // Clear current list

            if (bookmarks) {
                for(let i = 0; i < bookmarks.length; i++) {
                    const name = bookmarks[i].name;
                    const url = bookmarks[i].url;

                    // HERE IS WHERE WE INJECT THE HREF AUTOMATICALLY
                    list.innerHTML += `
                        <li>
                            <a href="${url}" target="_blank">${name}</a>
                            <button class="delete-btn" onclick="deleteBookmark('${url}')">Delete</button>
                        </li>
                    `;
                }
            }
        }

        function deleteBookmark(url) {
            let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            // Filter out the one we want to delete
            for(let i = 0; i < bookmarks.length; i++) {
                if(bookmarks[i].url == url) {
                    bookmarks.splice(i, 1);
                }
            }
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            loadBookmarks();
        }
    