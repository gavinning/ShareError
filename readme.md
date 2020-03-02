ShareError
---
可以携带err-code的Error对象

### Install
```sh
npm i @4a/share-error
```

### Usage
```js
const ShareError = require('@4a/share-error')

throw new ShareError(100, 'error code is 100')
throw new ShareError(200, 'error code is 200')
throw new ShareError(300, 'error code is 300')
```
