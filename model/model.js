var mongoose=require('mongoose');

var MyModel=mongoose.model('countries', 
new mongoose.Schema(
    {country_code: String, country_name: String, dailling_code: String,
        capital: String}
), 
'countries');  

module.exports=MyModel;