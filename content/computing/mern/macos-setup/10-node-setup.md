# MacOS Node Setup

## In the Terminal

1. Install [NVM](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
-   Download the nvm install script via cURL:
    -   `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
-   Ensure that nvm was installed correctly with  `nvm --version`, which should return the version of nvm installed.
-   Install the version of Node.js you want
    -   Install the latest version with  `nvm install node`
    -   Use the latest version with  `nvm use node`
    -   Install the latest LTS version with  `nvm install --lts`
    -   Use the latest LTS verison with  `nvm use --lts`

2. Install the latest (Long-Term Support) version of Node.js:

	<span style="color:blue">`greg$ nvm install --lts`</span>
	```
	Installing latest LTS version.
	Downloading and installing node v10.16.3...
	```
	<span style="color:blue">`greg$ nvm use --lts`</span>
	`Now using node v10.16.3 (npm v6.9.0)`
	<span style="color:blue">`greg$ node -v`</span>
	`v10.16.3`
	<span style="color:blue">`greg$ npm -v`</span>
	`6.9.0`


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM2NDIyMzUyNCwtMTU4NTM0MzQwMywtNz
gzMjMyMjkxXX0=
-->