<Script>
        const Cubes = document.querySelectorAll('.Cube');
        const LeftBtn = document.getElementById('LeftCategoriesButton');
        const RightBtn = document.getElementById('RightCategoriesButton');
        let currentIndex = 1;

        function updateCubes() {
            Cubes.forEach((Cube, index) => {
                Cube.classList.remove('Left', 'Center', 'Right', 'Visible');
                if (index === currentIndex - 1) {
                    Cube.classList.add('Left', 'Visible');
                } else if (index === currentIndex) {
                    Cube.classList.add('Center', 'Visible');
                } else if (index === (currentIndex + 1) % Cubes.length) {
                    Cube.classList.add('Right', 'Visible');
                }
            });
        }

        LeftBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + Cubes.length) % Cubes.length;
            updateCubes();
        });

        RightBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % Cubes.length;
            updateCubes();
        });

        document.addEventListener('DOMContentLoaded', () => {
            updateCubes();
        });
		
    document.addEventListener('DOMContentLoaded', function() {
    const CookiesDialogId = document.getElementById('CookiesDialogId');
    const acceptButton = document.getElementById('acceptCookies');
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        setTimeout(() => {
            CookiesDialogId.classList.add('show');
        }, 1000); 
    }

    acceptButton.addEventListener('click', function() {
        CookiesDialogId.classList.remove('show');
        localStorage.setItem('cookieConsent', 'accepted');
    });
});
</Script>
<Script>
        // Первая новость
        document.getElementById("NewFirst").addEventListener("click", function() {
        window.location.href = "Новость1"; 
        });
		// Вторая новость
        document.getElementById("NewSecond").addEventListener("click", function() {
        window.location.href = "Новость1"; 
        });
		// Третья новость
        document.getElementById("NewThird").addEventListener("click", function() {
        window.location.href = "Новость1"; 
        });		
		// Четвёртая новость
        document.getElementById("NewFourth").addEventListener("click", function() {
        window.location.href = "Новость1"; 
        });		
</Script>