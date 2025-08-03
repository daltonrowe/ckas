const currentLinks = document.querySelectorAll(`a[href='${window.location.pathname}']`);
currentLinks.forEach(link => link.classList.add('current'))
