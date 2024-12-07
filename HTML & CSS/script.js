function inscrireClient(client) {
  // Création de l'objet JSON contenant les données du client
  var data = {
    Username: client.Username,
    Nom: client.Nom,
    Prenom: client.Prenom,
    Motdepasse: client.Motdepasse,
    email: client.email,
    adresse: client.adresse
  };

  // Envoi des données à l'API en utilisant la méthode POST
  fetch('http://localhost:3000/api/inscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (response.ok) {
      // Succès de la requête
     
      return true;
    } else {
      // Erreur lors de la requête
      throw new Error('Erreur lors de l\'enregistrement du client');
    }
  })
  .catch(function(error) {
    console.error(error);
    return false;
  });
}


