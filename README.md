How to run DomainComponents

This example demos a basic host application loading from different remote component.

UIComponents standalone application which exposes baisc UI Button component.
LibApp holds all the node_modules, store and context used across the remote.

Running Demo
Clone LibApp Remote as a sibling folder to DomainComponents
  Under LibApp
    npm install
    npm start
Clone UIComponents Remote as a sibling folder to DomainComponents
  Under UIComponents
    npm install
    npm start
Under DomainComponnents Remote
  npm install
  npm start


localhost:8085 (STANDALONE REMOTE LibApp holds all lib, store and context)
localhost:8082 (STANDALONE REMOTE DomainComponents)
localhost:8083 (STANDALONE REMOTE UIComponents)
