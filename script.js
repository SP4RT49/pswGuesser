// Récupération des éléments du DOM
const form = document.querySelector('#password-form');
const passwordInput = document.querySelector('#password-input');
const copyButton = document.querySelector('#copy-button');
const strengthMeter = document.querySelector('#strength-meter');
const strengthLabel = document.querySelector('#strength-label');

// Fonction pour copier le mot de passe dans le presse-papier
function copyPasswordToClipboard() {
  passwordInput.select();
  document.execCommand('copy');
  alert('Mot de passe copié dans le presse-papier!');
}

// Fonction pour mettre à jour la force du mot de passe
function updateStrengthMeter() {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);

  strengthMeter.value = strength;
  let label = '';
  if (strength === 0) {
    label = 'Très faible';
  } else if (strength === 1) {
    label = 'Faible';
  } else if (strength === 2) {
    label = 'Moyen';
  } else if (strength === 3) {
    label = 'Fort';
  } else if (strength === 4) {
    label = 'Très fort';
  }
  strengthLabel.innerText = label;
  strengthLabel.className = 'strength-' + strength;
}

// Fonction pour calculer la force du mot de passe
function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength++;
  }
  if (password.match(/[a-z]+/)) {
    strength++;
  }
  if (password.match(/[A-Z]+/)) {
    strength++;
  }
  if (password.match(/[0-9]+/)) {
    strength++;
  }
  if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
    strength++;
  }
  return strength;
}

// Événements
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input');
  const firstNameInput = document.querySelector('#first-name-input');
  const birthdateInput = document.querySelector('#birthdate-input');
  const name = nameInput.value.trim();
  const firstName = firstNameInput.value.trim();
  const birthdate = birthdateInput.value.trim();

  // Vérification des champs nom, prénom et date de naissance
  if (!name || !firstName || !birthdate) {
    alert('Veuillez saisir votre nom, prénom et date de naissance!');
    return;
  }

  // Génération du mot de passe
  const password = passwordGenerator.generate({
    length: 16,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    excludeSimilarCharacters: true,
    strict: true,
  });

  // Affichage du mot de passe
  passwordInput.value = password;
  updateStrengthMeter();
});

copyButton.addEventListener('click', () => {
  copyPasswordToClipboard();
});
