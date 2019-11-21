# URL CheatSheet

## Format
{protocol}://{subdomain.domain.name:port}/the/path/to/file.html?{key=value}&{key2=value2}&{key3=value3}

## Protocol
Protocol: This is the format of the request. In most cases it will be `http` or `https`.
http: HyperText Transfer Protocol
https: Secure HyperText Transfer Protocol

## Domain
Domain: This is the domain name of the server you want to request HTML or API (JSON) data from. It's very often a domain name like 'google.com' or 'omdb.org'.

Subdomain: This is is a domain within the domain. For example, if you wanted the API server from Google, you'd use `api.google.com`. Not every request uses this. It's often used by large enterprises to segregate different parts of their website into smaller entities (like `card.capitalone.com` and `auto.capitalone.com`)

Port: The `port` is a number from 0-65535. It represents a further refinement of where the data on the server is coming from. For `http` requests, the port is almost always `80`. For `https` requests, the port is almost always `443`.

## Path
The `path` is a slash-separated (`/`) list of "folders" that lead to a "page". The reason I put "folders" in quotes is because it's very often not a physical folder on the server, but just a logical divison of the data leading to a filename.

The filename (in the case of a webpage) generally ends in `.html`. If the filename is omitted, (for a webpage) most servers assume you're reque
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNDUzOTExNzgsMjk1NDk1NDc0XX0=
-->