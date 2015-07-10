# Skynet

A framework for slack bots

# Getting started

- Install the latest node (`--harmony` is required)
- Fork skynet
- Clone Fork
- `npm Install`
- `npm start`

# Adding a New Bot

- Add a new [outgoing web hook](https://api.slack.com/outgoing-webhooks) configured to your liking
- Create a file/bot handler in the bot directory (we'll assume its _foo.js_)
- Add the bot config to your json files (make sure the name match's the name of your file)

```
{
  "bots" : [{
    "name"  : "foo",
    "tokens" : {
      "incoming" : "[TOKEN_FROM_HOOK]"
    }
  }]
}

```

- deploy
- enjoy

Keep in mind that bots are routed by the POST'ed token

# Utilities

A few utilities have been added for convenience

```javascript
module.exports = function *() {
  if (this.request.body.text ==='hello bot') {
    this.respond('hello human'); // sends the text as { text: text } (required for slack parsing)
  } else {
    this.error(400, 'OH NO!') // sends the error as { error: text } (ignored by slack, for testing only)
  }
}
```


# Author

- John Hofrichter

# Liscense

**[MIT](/LISCENSE)**
