[Pocket](https://getpocket.com) listing API

Running order:

1. Set `CONSUMER_KEY` in .env
1. `TERMINAL=true node ./dist/index.js auth`
1. `TERMINAL=true node ./dist/index.js token`
1. Set `ACCESS_TOKEN` and `POCKET_TAG` in .env
1. Use `index` to retrieve the list of Pocket links

Development:

`yarn run docker-run-development` - Run Docker with the project root shared to the client by the host. Allows modifying files and having FaaS reload on every change.

Use `docker run -d -e WATCH=false --name cherrypicked --rm -p 8835:80 cherrypicked` once the code is stable.