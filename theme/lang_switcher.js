document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.createElement('select');
    langSelect.id = 'lang-select';

    const enOption = document.createElement('option');
    enOption.value = 'en';
    enOption.textContent = 'English';
    langSelect.appendChild(enOption);

    const fiOption = document.createElement('option');
    fiOption.value = 'fi';
    fiOption.textContent = 'Suomi';
    langSelect.appendChild(fiOption);


    const switcherContainer = document.createElement('div');
    switcherContainer.id = 'language-switcher';
    switcherContainer.appendChild(langSelect);

    const sidebar = document.querySelector('nav#sidebar');
    if (sidebar) {
        const sidebarTitle = sidebar.querySelector('.sidebar-title');
        if (sidebarTitle) {
            sidebarTitle.after(switcherContainer);
        } else {
            sidebar.prepend(switcherContainer);
        }
    } else {
        document.body.prepend(switcherContainer);
    }

    // Function to extract language from a URL path segment
    function getLangFromPathname(pathname) {
        if (pathname.includes('/en/')) return 'en';
        if (pathname.includes('/fi/')) return 'fi';
        return null;
    }

    // Function to apply language filter to sidebar sections
    function applySidebarFilter(selectedLang) {
        const chapterList = document.querySelector('ol.chapter'); // The main ordered list in the sidebar
        if (!chapterList) return;

        const allListItems = Array.from(chapterList.children);

        // Pass 1: Determine language for each item
        const itemLangs = new Map();

        for (let i = 0; i < allListItems.length; i++) {
            const item = allListItems[i];

            if (item.classList.contains('chapter-item')) {
                const link = item.querySelector('a');
                if (link) {
                    itemLangs.set(item, getLangFromPathname(link.href));
                }
            } else if (item.classList.contains('part-title')) {
                // Look ahead for the next chapter-item to infer language
                let inferredLang = null;
                for (let j = i + 1; j < allListItems.length; j++) {
                    const nextItem = allListItems[j];
                    if (nextItem.classList.contains('chapter-item')) {
                        const link = nextItem.querySelector('a');
                        if (link) {
                            inferredLang = getLangFromPathname(link.href);
                        }
                        break; // Found the next chapter, stop looking
                    }
                }
                itemLangs.set(item, inferredLang);
            }
            // Spacers don't have intrinsic language
        }

        // Pass 2: Apply visibility
        let lastVisibleItem = null;
        let pendingSpacers = [];

        function processPendingSpacers(showOne) {
            if (showOne && pendingSpacers.length > 0) {
                pendingSpacers[0].style.display = '';
                for (let k = 1; k < pendingSpacers.length; k++) {
                    pendingSpacers[k].style.display = 'none';
                }
            } else {
                pendingSpacers.forEach(s => s.style.display = 'none');
            }
            pendingSpacers = [];
        }

        allListItems.forEach(item => {
            if (item.classList.contains('spacer')) {
                pendingSpacers.push(item);
            } else {
                // Content item (chapter-item or part-title)
                const lang = itemLangs.get(item);

                // Visible if language matches or is neutral (null)
                // Note: We treat null as neutral (visible in all), unless we want to enforce EN/FI strictly.
                // Given the structure, most items should now be identified.
                const isVisible = (lang === selectedLang || lang === null);

                if (isVisible) {
                    item.style.display = '';

                    if (lastVisibleItem) {
                        // Show one spacer between the previous visible item and this one
                        processPendingSpacers(true);
                    } else {
                        // First visible item, hide leading spacers
                        processPendingSpacers(false);
                    }
                    lastVisibleItem = item;
                } else {
                    item.style.display = 'none';
                }
            }
        });

        // Hide trailing spacers
        processPendingSpacers(false);
    }

    // Get current language from localStorage or infer from URL or default to 'en'
    let currentLanguage = localStorage.getItem('mdbook-lang');
    if (!currentLanguage) {
        currentLanguage = getLangFromPathname(window.location.pathname) || 'en';
        localStorage.setItem('mdbook-lang', currentLanguage);
    }

    langSelect.value = currentLanguage;
    applySidebarFilter(currentLanguage);

    // Event listener for language change
    langSelect.addEventListener('change', function () {
        const newLang = this.value;
        localStorage.setItem('mdbook-lang', newLang);

        applySidebarFilter(newLang); // Filter sidebar immediately

        // Redirect to the corresponding language's page
        const currentPathname = window.location.pathname;
        let newPathname = currentPathname;

        const currentLangInUrl = getLangFromPathname(currentPathname);

        if (currentLangInUrl === newLang) {
            // Already on the correct language path, no redirection needed for path
        } else {
            // Replace the language part in the URL
            // If no language prefix in current URL (e.g., at root, or /index.html directly)
            // This means the user is probably at the site root, and we should
            // redirect them to the new language's index page.
            newPathname = `/${newLang}/index.html`; // Redirect to index of new language
        }

        // Construct new URL, including search and hash
        const newUrl = newPathname + window.location.search + window.location.hash;
        window.location.href = newUrl;
    }
    );

    // Styling is handled by theme/lang_switcher.css
});