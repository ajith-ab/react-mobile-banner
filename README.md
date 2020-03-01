# react-mobile-banner

> React Js smart Mobile Browser banner for android ,ios and windows 

[![NPM](https://img.shields.io/npm/v/react-mobile-banner.svg)](https://www.npmjs.com/package/react-mobile-banner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mobile-banner
```

## Usage

```jsx
import React from 'react'
import MobileBanner from 'react-mobile-banner';

export default class App extends React.Component{
   constructor(props) {
     super(props)
     this.state = {
        bannerShow:true
     };
   };
  render(){
    const { bannerShow } = this.state;
    return (
      <div>
        <MobileBanner 
            showBanner={bannerShow} //
            position="bottom"
            appTitle='Linked In'
            appDescription='Job Search and Networking'
            appId={{android:'com.linkedin.android',ios:'id288429040'}}
            starRatingCount={4}
            backgroundColor=""
            appIcon={require('./appIcon.png')}
            onClose={()=>this.setState({bannerShow:false})}
            onInstall={()=>alert('install Clicked')}
        />
        <p>
        ....paragraphs
        </p>
             
      </div>
    );
}
}
```


## License

MIT © [Ajith A B](https://github.com/ajith-ab)
