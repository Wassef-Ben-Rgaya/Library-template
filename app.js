function inscrireClient(client) {
	fetch('http://localhost:3000/api/inscription', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(client)
	})
	.then(response => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error('Une erreur est survenue');
	  }
	})
	.then(data => {
	  console.log(data);
	  // Do something with the response data
	})
	.catch(error => {
	  console.error(error);
	  // Handle any errors that occur
	});
  }
  const form = document.getElementById('inscription-form');

  form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = form.username.value.trim();
	const nom = form.nom.value.trim();
	const prenom = form.prenom.value.trim();
	const motdepasse = form.motdepasse.value.trim();
	const email = form.email.value.trim();
	const adresse = form.adresse.value.trim();
  
	const client = {
	  username: username,
	  nom: nom,
	  prenom: prenom,
	  motdepasse: motdepasse,
	  email: email,
	  adresse: adresse
	};
  
	inscrireClient(client);
  });
	