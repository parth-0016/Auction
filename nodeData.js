// Add a GET endpoint to retrieve all users
app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving users from database');
      } else {
        console.log(users);
        res.send(users);
      }
    });
  });