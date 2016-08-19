Start Server
------------

```
npm install
node app/index.js
```

Will listen on `3000`.

Endpoints
---------

Use command `http` from [httppie](https://github.com/jkbrzt/httpie).

Sync api:

```
http POST http://localhost:3000/sync/users username=aaa password=111
http http://localhost:3000/sync/users
```

Async api:

```
http POST http://localhost:3000/async/users username=aaa password=111
http http://localhost:3000/async/users
```