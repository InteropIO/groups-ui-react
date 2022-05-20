## Overview

The `@glue42/groups-ui-react` library enables you to create your own Web Group App for [**Glue42 Enterprise**](https://glue42.com/enterprise/). It provides all necessary functionalities as a single React component - `<Group />`. The library allows complete customization of the Glue42 Window group elements and the elements of the different types of Glue42 Windows (flat, tab and HTML) participating in the group. The provided default components can be replaced or extended with your custom ones.

## Install

To use the library in your project, execute the following command:

```cmd
npm install @glue42/groups-ui-react
```

## Usage

The following example demonstrates a basic usage of the `<Group />` component:

```javascript
import React from 'react'
import Group from "@glue42/groups-ui-react";
import "@glue42/groups-ui-react/dist/styles/styles.css";

const App = () => {
  return <Group />
};

export default App;
```