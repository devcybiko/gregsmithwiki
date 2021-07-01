# Sequelize

## Models

```javascript
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return User;
};

```

# Config

```javascript
{
  "development": {
    "username": "root",
    "password": null,
    "database": "todolist",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
```

## Server

```javascript
var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
```

## Create
```javascript
function addUser(firstName, lastName, email, password) {
    var newUser = { firstName: firstName, lastName: lastName, email: email, password: password };
    bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
        newUser.password = hash;
        db.User.create(newUser).then(function (user) {
            console.log(user.dataValues);
        }).catch(function (err) {
            console.error(`ERROR: ${err.errors[0].message}: ${err.errors[0].value}`);
        });
    });
}
```

## Read
```javascript
function getUser(email) {
    var findUser = { firstName: firstName, lastName: lastName, email: email, password: password };
        db.User.findAll(newUser).then(function (user) {
            console.log(user.dataValues);
        }).catch(function (err) {
            console.error(`ERROR: ${err.errors[0].message}: ${err.errors[0].value}`);
        });
    });
}
```

## Update

## Delete
```javascript
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
```

## Synchronous

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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMjMwOTE3OTNdfQ==
-->