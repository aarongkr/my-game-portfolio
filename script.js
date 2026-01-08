document.addEventListener('DOMContentLoaded', () => {
  // --- Game Data ---
  // To add a new game, copy an existing game object, paste it as a new element in the array,
  // and update its properties (id, title, thumbnail, descriptions, links, technologies).
  // Make sure image URLs are direct links to the image file (e.g., ending in .png, .jpg).
  const games = [
      {
          id: 'idea-engine',
          title: 'The Idea Engine',
          thumbnail: 'https://i.ibb.co/DHZkRpFB/The-Idea-Engine.png',
          shortDescription: 'Forge concepts into paradigms in this unique clicker where ideas are your currency.',
          longDescription: `Dive into 'The Idea Engine,' a clicker game with an intellectual twist. Instead of mere coins, you'll generate an ever-expanding stream of thoughts. Start with basic concepts, meticulously combine them to form profound insights, weave insights into groundbreaking theories, and finally, crystallize theories into revolutionary paradigms. Witness your intellectual empire take shape as these discoveries dynamically map themselves onto your personal, interactive 'noosphere,' a visual testament to your accumulated knowledge.`,
          playLink: 'https://aarongkr.github.io/The-Idea-Engine/',
          codeLink: 'https://github.com/aarongkr/The-Idea-Engine',
          technologies: ['HTML', 'CSS', 'JavaScript', 'vis.js']
      },
      {
          id: 'dice-tycoon',
          title: 'Dice Tycoon',
          thumbnail: 'https://i.ibb.co/PvtS5RPR/Screenshot-2025-05-16-212128.png',
          shortDescription: 'Roll high to earn high! Test your luck in this addictive dice clicker.',
          longDescription: `Welcome to 'Dice Tycoon,' where fortune favors the bold (and lucky!). This isn't your average clicker; here, high rolls are your ticket to riches. Strategically upgrade your odds, boost your earnings per successful roll, and watch your tycoon status soar. Can you master the dice and build your empire?`,
          playLink: 'https://aarongkr.github.io/dice-roller/',
          codeLink: 'https://github.com/aarongkr/dice-roller',
          technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
          id: 'dice-roller',
          title: 'Dice Roller',
          thumbnail: 'https://i.ibb.co/99zBgwjG/IMG-0001.png',
          shortDescription: 'Test your luck and your nerve with this simulation, where you pick the odds!',
          longDescription: `Welcome to 'Dice Tycoon,' where fortune favors the bold (and lucky!). This isn't your average gambling simulator; here, you get to choose the odds. Up the risk to up the reward! How much can you make - without losing it all?`,
          playLink: 'https://aarongkr.github.io/dice-game/',
          codeLink: 'https://github.com/aarongkr/dice-game',
          technologies: ['HTML', 'CSS', 'JavaScript']
      }
      // Add more game objects here following the same structure
      /*
      {
          id: 'new-game', // A unique ID for the game
          title: 'My Awesome New Game',
          thumbnail: 'https://link-to-your-game-thumbnail.com/image.png',
          shortDescription: 'A brief, catchy description for the card.',
          longDescription: 'A more detailed description for the modal view. Talk about the gameplay, features, story, or your development process.',
          playLink: 'https://your-github-pages-link-to-play.com/',
          codeLink: 'https://github.com/your-username/your-game-repo',
          technologies: ['Tech1', 'Tech2', 'AnotherTech']
      }
      */
  ];

  const gamesGrid = document.getElementById('gamesGrid');
  const modal = document.getElementById('gameModal');
  const closeModalButton = document.getElementById('closeModalButton');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalTechTags = document.getElementById('modal-tech-tags');
  const modalLongDescription = document.getElementById('modal-long-description');
  const modalPlayLink = document.getElementById('modal-play-link');
  const modalCodeLink = document.getElementById('modal-code-link');

  // --- Populate Game Cards ---
  games.forEach(game => {
      const card = document.createElement('div');
      card.classList.add('game-card');
      card.setAttribute('data-game-id', game.id);

      let techHtml = '';
      game.technologies.slice(0, 3).forEach(tech => { // Show max 3 techs on card
          techHtml += `<span class="tag">${tech}</span>`;
      });

      card.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title} Screenshot">
          <div class="game-card-content">
              <div>
                  <h3>${game.title}</h3>
                  <p>${game.shortDescription}</p>
              </div>
              <div class="tech-tags">
                  ${techHtml}
              </div>
          </div>
      `;
      card.addEventListener('click', () => openModal(game));
      gamesGrid.appendChild(card);
  });

  // --- Modal Functionality ---
  function openModal(game) {
      modalImg.src = game.thumbnail; // Or you could have a dedicated larger modal image
      modalImg.alt = `${game.title} Screenshot`;
      modalTitle.textContent = game.title;
      
      modalTechTags.innerHTML = ''; // Clear previous tags
      game.technologies.forEach(tech => {
          const tagSpan = document.createElement('span');
          tagSpan.classList.add('tag');
          tagSpan.textContent = tech;
          modalTechTags.appendChild(tagSpan);
      });

      modalLongDescription.innerHTML = game.longDescription.replace(/\n/g, '<br>'); // Preserve line breaks if any
      modalPlayLink.href = game.playLink;
      modalCodeLink.href = game.codeLink;

      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto'; // Restore scrolling
  }

  closeModalButton.addEventListener('click', closeModal);
  
  // Close modal if user clicks outside of the modal content
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModal();
      }
  });
  
  // Close modal with Escape key
  window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('show')) {
          closeModal();
      }
  });

  // --- Footer Year ---
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
