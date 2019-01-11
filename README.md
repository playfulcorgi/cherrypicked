# [Pocket](https://getpocket.com) listing API

Example response:

```js
[
  {
    "imageUrl": "https://screenshots.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNDZdsqbcGTU",
    "hasImage": true,
    "sourceUrl": "https://www.youtube.com/watch?v=NDZdsqbcGTU",
    "title": "WHERE DREAMS GO TO DIE - Gary Robbins and The Barkley Marathons",
    "time": "1546892639"
  },
  {
    "imageUrl": "https://screenshots.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaoMfbgF2D_4",
    "hasImage": true,
    "sourceUrl": "https://www.youtube.com/watch?v=aoMfbgF2D_4",
    "title": "Martin Fowler – Continuous Delivery",
    "time": "1545145254"
  },
  {
    "imageUrl": "https://screenshots.com/?url=https%3A%2F%2Fmedium.freecodecamp.org%2Fthe-revolution-of-pure-views-aed339db7da4",
    "hasImage": true,
    "sourceUrl": "https://medium.freecodecamp.org/the-revolution-of-pure-views-aed339db7da4",
    "title": "Functional Programming is taking over UIs with Pure Views.",
    "time": "1547043110"
  },
  ...
]
```

Running order:

1. Set `CONSUMER_KEY` in .env
1. `TERMINAL=true node ./dist/index.js auth`
1. `TERMINAL=true node ./dist/index.js token`
1. Set `ACCESS_TOKEN` and `POCKET_TAG` in .env
1. Use `index` to retrieve the list of Pocket links

`SCREENSHOT_SERVICE_URL` can be set in .env to modify the value of `imageUrl` and `hasImage`. For example, `SCREENSHOT_SERVICE_URL=https://screenshotmaker.com` makes the service return `imageUrl: "https://screenshotmaker.com?url=<pocket sourcelUrl>"`. Setting `SCREENSHOT_SERVICE_URL` makes `hasImage` always `true`.

Development:

`yarn run docker-run-development` - Run Docker with the project root shared to the client by the host. Allows modifying files and having FaaS reload on every change.

Use `docker run -d -e WATCH=false --name cherrypicked --rm -p 8835:80 cherrypicked` once the code is stable.