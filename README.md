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


# Author

- John Hofrichter

# Liscense

**[MIT](/LISCENSE)**
