const bcrypt = require("bcrypt")
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';



// genSalt is the key
bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log("salt", salt);
    // hash is convert the password into encryption
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log("hash: ",hash);
        console.log({salt,hash});

        // compair the password
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            console.log(result);
            
        });


        
    });


    


});

