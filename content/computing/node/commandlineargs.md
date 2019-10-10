# Command Line Arguments - yargs

## Example

```javascript
const yargs = require('yargs');

function handleArgs() {
    const argv = yargs
        .command('lyr', 'Tells whether an year is leap year or not', {
            year: {
                description: 'the year to check for',
                alias: 'y',
                type: 'number',
            }
        })
        .option('time', {
            alias: 't',
            description: 'Show the current time)',
            type: 'boolean',
        })
        .option('force', {
            alias: 'f',
            description: 'Force the database to reset (drop all tables and recreate)',
            type: 'boolean',
        })
        .help()
        .alias('help', 'h')
        .argv;

    console.log(argv);

    if (argv.time) {
        console.log('The current time is: ', new Date().toLocaleTimeString());
    }

    // NOTE: node index lyr -y 2016
    if (argv._.includes('lyr')) {
        const year = argv.year || new Date().getFullYear();
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            console.log(`${year} is a Leap Year`);
        } else {
            console.log(`${year} is NOT a Leap Year`);
        }
        process.exit()
    }

    return argv;
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1NDU3OTMzNzJdfQ==
-->