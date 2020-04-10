## Networking and Streams

TCP - reliable transport: if a packet is not acknowledged (ACK) on the other end, it gets resent.

UDP - unreliable transport: packets are sent but there is no confirmation that the packet was recieved at the other end. Sometimes used for streaming video and audio, some games.

### Protocols

- The language that computer programs speak to each other.

* HTTP - browse web pages
* HTTPS - browse web pages with encryption
* SMTP - send and recieve mails
* IMAP, POP3 - load emails from an inbox
* IRC - chat
* FTP - file transfer
* SSH - remote shell over and encryption network
* SSL - low level secure data transfer (used by HTTPS)

### Ports

Each Computer can have many services
A port is a number between 1 and 65535 that distinguishes services running on the system.

#### Customary ports

- 21 - ftp (control port)
- 22 - ssh
- 25 - smtp
- 80 - http
- 443 - https
- 3306 - mysql
- 5432 - postgresql
- 5984 - couchdb
- 6667 - irc

### Peer to peer connection

Aside from servers and clients, there is a third role in computer networks: peer
In a peer to peer (p2p) network, clients establish connections directly on other clients. Nodes in the network are symmetric with no fixed central servers.
Examples: webrtc, bittorrent.

### NetCat server

- To start a server - `$ nc -lp 5000`
- connect to server - `$ nc localhost 5000`

#### HTTP protocol

Hyper-text Transfer Protocol
HTTP requests begins with a verb i.e:
GET - fetch a document
POST - submit a form
HEAD - fetch meta-data about document
PUT - upload a file

### Stream Types

through2 - transform

concat-stream - writable

- Readable - Produces data: you can pipe from it.
- Writable - Consumes data: you can pipe to it.
- transform - consumes data, producing transformed data.
- duplex - consumes data separately from producing data.

### Stream types in code

- readable: `readable.pipe(A)`
- writable: `A.pipe(writable)`
- transform: `A.pipe(transform).pipe(B)`
- duplex: `A.pipe(duplex).pipe(A)`
