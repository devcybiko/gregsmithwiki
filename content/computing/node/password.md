# Password Hashing

## Example

```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


// HASH

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

// OR

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});

// COMPARE
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
});

bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false
});

var hash = await bcrypt.hash(password, saltRounds);
var isMatched = await bcrypt.compare(password, foundUser.password);

```

## References
- [NPMJS](https://www.npmjs.com/package/bcrypt)
- [Code For Geeks](https://codeforgeek.com/password-hashing-nodejs/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU1MDQxMDldfQ==
-->