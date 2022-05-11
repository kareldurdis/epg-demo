# epg-demo
This is a Norigin Media candidate test https://github.com/NoriginMedia/candidate-tester 

## Installation

```bash
npm i github:kareldurdis/epg-demo
```
Package exports <Guide> component and EPG type for expected data format.

## Component
Fetch data and send them to the `<Guide>` component.

```typescript jsx
import React, { useEffect, useState } from 'react';
import Guide, { EPG }  from 'epg-demo';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState<EPG>();
  useEffect( () => {
    const getData = async () => {
      const response = await axios.get<EPG>('http://localhost:1337/epg')
      setData(response.data);
    }
    getData();
  }, [])

  if (!data) {
    return <div>Loading</div>
  }

  return (
    <div className="App">
      <Guide epg={data} />
    </div>
  );
}
```

## Development
### Storybook
You can use storybook for development. All components are there.
```shell
npm run storybook
```
### Mock API
Should you need mock EPG API, you can run
```shell
npm run start:mock-api
```
### Channel images
The mock API unfortunately provides channel logos on an unreachable server. There's a rewrite function in `<Guide>` component storybook to use local logos. You need to start the http-server to get them
```shell
npm run start:mock-images
```

## Webpack 5
This package is build as ESM module. There's a problem with one of the imports of `dayjs` library if you use the package in a project with Webpack 5 (i.e. `create-react-app`). You might get following error:

> "BREAKING CHANGE: The request failed to resolve only because it was resolved as fully specified (probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '.mjs' file, or a '.js' file where the package.json contains '"type": "module"')."

You need to update js loader in your webpack configuration, i.e.
```typescript
{
  test: /\.m?js/,
    resolve: {
    fullySpecified: false,
  },
}
```
If you're using `create-react-app`, you need to eject from CRA.
