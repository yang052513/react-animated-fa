# react-social-media-icon

[![NPM](https://img.shields.io/npm/v/react-animated-fa.svg)](https://www.npmjs.com/package/react-animated-fa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> 🥂 A beautiful and easy to use react animated font-awesome icon component.

```html
<Icon iconUrl="fab fa-facebook-messenger" link="https://www.facebook.com/" />
```

<img src="https://firebasestorage.googleapis.com/v0/b/yangliweb.appspot.com/o/5.gif?alt=media&token=e150f18d-a216-4451-8081-b80e7005a3e9" />

<br />

## Install

```shell
npm install react-animated-fa
```

In order to enable font-awesome icon properly, make sure adding the script below to your html file.

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
/>
```

## Import

```js
import { Icon } from 'react-animated-fa'
```

## Properties

| Properties   | Require  | Default            | Description                                                    | Type    |
| ------------ | -------- | ------------------ | -------------------------------------------------------------- | ------- |
| iconUrl      | required |                    | The class name of font-awesome icon. E.g. 'far fa-lightbulb'   | string  |
| link         | required |                    | Redirected link ater clicking the icon                         | string  |
| size         | optional | 24                 | The size of the icon. E.g. size={30} will be 30px for the icon | number  |
| color        | optional | 'rgb(0,0,0)'       | The color of the icon                                          | string  |
| hoveredColor | optional | 'rgb(255,255,255)' | The color of the icon while hovering                           | string  |
| layerColor   | optional | 'rgb(140,0,255)'   | The color of the layer on top of the icon                      | string  |
| margin       | optional | 10                 | The margin around the icon container                           | number  |
| padding      | optional | 0                  | The padding of the icon inside the wrapper container           | number  |
| rounded      | optional | false              | If true the layer will be rounded shape                        | boolean |
| bgColor      | optional | null               | If enable, will show the background color of the icon          | string  |

## Usage

For icon seraches, check out [Font Awesome Website](https://fontawesome.com/) for icon link.

### Default Icon Props

`iconUrl` and `link` are required in order to render the icon properly. The code below will render a messenger icon that link to facebook.com.

```jsx
import React from 'react'
import {Icon} from 'react-animated-fa'

export const App:React.FC = () => {
    return (
        <div>
            <Icon iconUrl="fab fa-facebook-messenger" link="https://www.facebook.com/">
        </div>
    )
}
```

<img src="https://firebasestorage.googleapis.com/v0/b/yangliweb.appspot.com/o/3.gif?alt=media&token=f509f5e0-62d9-4bcc-ba03-03dfe4426826" />

<br />

### Customize Icon Props

```jsx
import React from 'react'
import { Icon } from 'react-animated-fa'

export const App: React.FC = () => {
  return (
    <div>
      <Icon
        iconUrl="fab fa-facebook-messenger"
        link="https://www.facebook.com/"
        color="rgb(29, 179, 199)"
        layerColor="rgb(29, 179, 199)"
        bgColor="#f1f1f1"
        rounded={true}
      />
    </div>
  )
}
```

<img src="https://firebasestorage.googleapis.com/v0/b/yangliweb.appspot.com/o/14.gif?alt=media&token=2390bd77-7cc1-4ea2-b165-11d94571f8e9" />

<br />

## Uninstall

In your project directory, run

```shell
npm uninstall react-animated-fa
```

## ChangeLog

- 2020/07/05 version 1.0.1 publish

## License

MIT © [yang052513](https://github.com/yang052513)
