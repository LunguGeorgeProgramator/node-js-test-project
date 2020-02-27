require('./model_dir/Clinic').sync(); //.sync({ force: true }) for fresh migration * Note it removes any entry in table
require('./model_dir/Medic').sync();