document.addEventListener('DOMContentLoaded', () => {
    const trendingContent = [
        { id: 1, title: "Bhola", image: "images/movie1.jpg" },
        { id: 2, title: "Bharamastra", image: "images/movie2.jpg" },
        { id: 3, title: "Antim ", image: "images/movie3.jpg" },
        { id: 4, title: "Aashiqui", image: "images/movie4.jpg" },
        { id: 5, title: "Saiya ji Dagabaaj", image: "images/movie5.jpg" },
        { id: 6, title: "Pushpa", image: "images/movie6.jpg" },
    ];

    const seriesContent = [
        { id: 11, title: "Asur", image: "images/series1.jpg" },
        { id: 12, title: "Mirzapur", image: "images/series2.jpg" },
        { id: 13, title: "Money Heist", image: "images/series3.jpg" },
        { id: 14, title: "Farzi", image: "images/series4.jpg" },
        { id: 15, title: "Dark", image: "images/series5.jpg" },
        { id: 16, title: "Squid Game", image: "images/series6.jpg" },
        
    ];

    const recommendedContent = [
        { id: 21, title: "Wednesday", image: "images/recommended1.jpg" },
        { id: 22, title: "Stranger Things", image: "images/recommended2.jpg" },
        
    ];

    function populateContent(sectionId, contentArray) {
        const section = document.getElementById(sectionId);
        const contentGrid = section.querySelector('.content-grid');
        contentArray.forEach(item => {
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
            `;
            contentDiv.addEventListener('click', () => {
                window.location.href = `details.html?id=${item.id}`;
            });
            contentGrid.appendChild(contentDiv);
        });
    }

    populateContent('trending', trendingContent);
    populateContent('series', seriesContent);
    populateContent('recommended', recommendedContent);

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.content-grid div').forEach(item => {
            const title = item.querySelector('p').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'block' : 'none';
        });
    });
});
