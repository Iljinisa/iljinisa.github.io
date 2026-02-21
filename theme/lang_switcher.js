document.addEventListener('DOMContentLoaded', function() {
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

    const langLabel = document.createElement('label');
    langLabel.setAttribute('for', 'lang-select');
    langLabel.textContent = 'Language: ';

    const switcherContainer = document.createElement('div');
    switcherContainer.id = 'language-switcher';
    switcherContainer.appendChild(langLabel);
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

        // Select all relevant LI elements (chapter items, part titles, spacers)
        const allListItems = chapterList.querySelectorAll('li.chapter-item, li.part-title, li.spacer');

        allListItems.forEach(item => {
            let itemLang = null;

            if (item.classList.contains('part-title')) {
                // For part-title elements (like "Course Material (EN)" or "Finnish Course")
                const text = item.textContent.toLowerCase();
                // Check for explicit (EN) or (FI) or just "english" / "finnish" in the title
                if (text.includes('(en)') || text.includes('english book')) {
                    itemLang = 'en';
                } else if (text.includes('(fi)') || text.includes('finnish')) {
                    itemLang = 'fi';
                }
            } else if (item.classList.contains('chapter-item')) {
                // For actual chapter links
                const link = item.querySelector('a');
                if (link) {
                    itemLang = getLangFromPathname(link.href);
                }
            } else if (item.classList.contains('spacer')) {
                // Spacers should generally be visible to maintain layout, or hidden if both languages are hidden around them.
                // For simplicity, let's make them visible unless explicitly associated with a hidden language block.
                itemLang = null; // Don't filter by language explicitly
            }

            // Apply display style
            if (itemLang === selectedLang) {
                item.style.display = ''; // Show
            } else if (itemLang !== null) { // If it's a language-specific item but not the selected lang
                item.style.display = 'none'; // Hide
            } else {
                // If itemLang is null (e.g., a spacer or an item whose language couldn't be determined)
                // We'll keep these visible unless they are structurally part of a hidden block.
                // For now, let's keep them visible. If they are nested, their parent's display will control them.
                item.style.display = '';
            }
        });
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
    langSelect.addEventListener('change', function() {
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
            if (currentLangInUrl) { // If there was a language in the URL (e.g., /en/ or /fi/)
                newPathname = currentPathname.replace(`/${currentLangInUrl}/`, `/${newLang}/`);
            } else {
                // If no language prefix in current URL (e.g., at root, or /index.html directly)
                // This means the user is probably at the site root, and we should
                // redirect them to the new language's index page.
                newPathname = `/${newLang}/index.html`; // Redirect to index of new language
            }

            // Construct new URL, including search and hash
            const newUrl = newPathname + window.location.search + window.location.hash;
            window.location.href = newUrl;
        }
    });

    // Styling is handled by theme/lang_switcher.css
});