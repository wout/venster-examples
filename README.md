# Venster Examples

This repo contains example implementations of the [DAT Metadata
Standard](https://docs.venster.art/dat-metadata-standard.html). They are all
minted on the **mainnet** and **preprod** networks under policy ID
[`3333acb55ed79731ea6658abb74f453cbb87e15aee01a7aab484b2a6`](https://venster.io/policies/3333acb55ed79731ea6658abb74f453cbb87e15aee01a7aab484b2a6/assets).

## Block data JSON endpoint

Browser-based DATs have an endpoint available to query data from the latest
block at runtime. This is done using the `postMessage` API. Here's an example:

```js
// Request the data from venster periodically (every 10 seconds)
setInterval(() => window.parent.postMessage('@current_block', '*'), 10000)

// Receive the data from venster
window.addEventListener('message', (event) => {
  // Handle the requested data
  console.log(event.data.current_block)
})
```

For now, there's only the `@current_block` endpoint, but more endpoints will be
available in the future.

**Note**: since Cardano produces a block every 20 seconds, there's no need to
use a higher frequency than 10 seconds. If too many requests are sent to the
endpoint, your token may be rate limited or even blocked.
