document.addEventListener("DOMContentLoaded", function() {

    // --- 1. HOME PAGE SLIDESHOW CODE ---
    
    // Find the hero section (you called it .welcome)
    const imgHeroSection = document.querySelector(".welcome");

    // Check if we are on the home page (if .welcome exists)
    if (imgHeroSection) {
        const images = [
            'url("assets/img/banner.png")',
            'url("assetsimg/p1.png")',
        ];

        let currentIndex = 0;

        function changeBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            imgHeroSection.style.backgroundImage = images[currentIndex];
        }

        // Set the first image immediately
        imgHeroSection.style.backgroundImage = images[0];
        
        // Start the 5-second timer
        setInterval(changeBackground, 5000);
    }

    
    // --- 2. CHARACTER PAGE INTERACTIVITY ---
    
    // Find the character profile section
    const characterProfile = document.getElementById('profile-display');

    // Check if we are on the character page (if #profile-display exists)
    if (characterProfile) {
        
        // 1. Store all character data
        const characterData = {
            'ignis': {
                name: 'Ignis, the Fire-Wielder',
                bio: 'Ignis is a high-risk, high-reward character. She uses powerful fire magic to control the battlefield, but her low health makes her a glass cannon.',
                difficulty: 7,
                image: 'assets\img\Unit_ills_atk_10127.webp' 
            },
            'cannon': {
                name: 'Cannon Master',
                bio: 'The Cannon Master is a heavy-hitter, perfect for beginners. What he lacks in speed, he makes up for in pure destructive power and a large health pool.',
                difficulty: 3,
                image: 'https://orangemushroom.net/wp-content/uploads/2020/09/cannon-shooter.gif'
            },
            'aqua': {
                name: 'Aqua, the Healer',
                bio: 'Aqua is the team\'s essential support. She uses water magic to heal allies and disrupt enemies. Her difficulty comes from managing the team, not just herself.',
                difficulty: 5,
                image: 'assets\img\ClassArtwork_Bishop_(Destiny,_Female).png'
            }
        };

        // 2. Get all the elements we need to update
        const buttons = document.querySelectorAll('.char-select-btn');
        const profileImg = document.getElementById('profile-img');
        const profileName = document.getElementById('profile-name');
        const profileDifficulty = document.getElementById('profile-difficulty');
        const profileBio = document.getElementById('profile-bio');

        // 3. Create a function to update the profile
        function showCharacter(charId) {
            const char = characterData[charId];
            profileImg.src = char.image;
            profileImg.alt = char.name;
            profileName.textContent = char.name;
            profileDifficulty.value = char.difficulty;
            profileBio.textContent = char.bio;
        }
        
        // 4. Add click event listeners to all buttons
        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const charId = btn.dataset.char;
                showCharacter(charId);

                // Update active button
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // --- 3. NEW: MARKETPLACE CART CODE ---
    
    // Check if we are on the market page
    const marketGrid = document.querySelector('.market-grid');
    if (marketGrid) {
        
        // Get all the buttons
        const buyButtons = document.querySelectorAll('.buy-btn');
        // Get the cart list element
        const cartList = document.getElementById('cart-list');
        // Get the cart total element
        const cartTotalEl = document.getElementById('cart-total');
        
        // Set the starting total price
        let totalPrice = 0;

        // Add a click listener to EACH button
        buyButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                
                // 1. Get the item's details from the parent card
                const card = button.closest('.item-card');
                const itemName = card.querySelector('h3').textContent;
                const itemPriceString = card.querySelector('.item-price').textContent;
                
                // 2. Convert price ("500 Gold") to a number (500)
                const itemPrice = parseInt(itemPriceString);

                // 3. Create a new list item
                const li = document.createElement('li');
                li.textContent = `${itemName} - ${itemPrice} Gold`;
                
                // 4. Add the new item to the cart list
                cartList.appendChild(li);

                // 5. Update the total price
                totalPrice += itemPrice;
                cartTotalEl.textContent = totalPrice;

                // 6. (Optional) Disable the button so you can't buy it twice
                button.textContent = "Purchased";
                button.disabled = true;
            });
        });
    }

    const skillSlider = document.getElementById('skill-level');
    
    if (skillSlider) {
        const skillOutput = document.getElementById('skill-output');
        
        // Set the initial value
        skillOutput.textContent = skillSlider.value;
        
        // Add listener to update the value on change
        skillSlider.addEventListener('input', function() {
            skillOutput.textContent = skillSlider.value;
        });
    }

});