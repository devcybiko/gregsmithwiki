# Async & Await

# Examples

```javascript

    await db.sequelize.sync({ force: argv.force });
    if (argv.force) {
        var newUser = await addUser("Greg", "Smith", "thinkable@thinkable.us", "password");
        console.log(`New User / Password = ${JSON.stringify(newUser)}`);
        var foundUser = await checkUser("thinkable@thinkable.us", "password");
        console.log(`Found User / Password = ${JSON.stringify(foundUser)}`);
    } else {
        var goodUser = await checkUser("thinkable@thinkable.us", "password");
        console.log(`Good User / Password = ${JSON.stringify(goodUser)}`);
        var badUser = await checkUser("thinkable@thinkable.us", "arg...");
        console.log(`Bad User / Password = ${JSON.stringify(badUser)}`);
    }

async function addUser(firstName, lastName, email, password) {
    var user;
    try {
        var result = undefined;
        var hash = await bcrypt.hash(password, saltRounds);
        var newUser = { firstName: firstName, lastName: lastName, email: email, password: hash };
        var data = await db.User.create(newUser);
        user = data.dataValues;
    } catch (err) {
        console.error(`ERROR: ${err}`);
    }
    return user;
}

async function getUser(email) {
    var user;
    try {
        var findUser = { where: { email: email } };
        var found = await db.User.findAll(findUser);
        if (found.length !== 0) {
            user = found[0];
        }
    } catch (err) {
        console.error(`ERROR: ${err}`);
    }
    return user;
}

async function checkUser(email, password) {
    var user;
    try {
        var foundUser = await getUser(email);
        if (foundUser) {
            var isMatched = await bcrypt.compare(password, foundUser.password);
            if (isMatched) user = foundUser;
        }
    } catch (err) {
        console.error(`ERROR: ${err}`);
    }
    return user;
}


```

#References

- [Rising Stack](https://blog.risingstack.com/mastering-async-await-in-nodejs/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjY4NDQxMjk1XX0=
-->