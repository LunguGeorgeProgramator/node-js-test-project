const { Clinic, Medic } = require('./models.js');
Clinic.sync(); //.sync({ force: true }) for fresh migration * Note it removes any entry in table
Medic.sync(); //.sync({ force: true }) for fresh migration * Note it removes any entry in table