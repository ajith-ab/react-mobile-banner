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
            showBanner={bannerShow} 
            position="top"
            topStickyBanner={true}
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

### Available Props
key props |  type | defualts | available  | example | descriptions
--- | --- | --- | --- | --- | ---
showBanner | bool | true | true, false | {true} | to show or hide the Banner
position | string | 'top' | 'top', 'bottom' | {'bottom'} | Postion of the banner
topStickyBanner | bool | true | true, false | {true} | stay top of the page
backgroundColor | string | 'white' | 'black', '#ccc' ...etc | {'#ccc'} | Change the Background Color of the Banner
appId | Object | {} | android,ios and Windows| {ios: '', android: '',  windows: '', }| Add Appliction Id of the Stores
closeButtonStyle | Object | {} | {all type of css styles} | {color:'#fff', ...}, | Add style to Close Icon
onClose | function | {} | {} | {()=>alert('Close clicked")}, | Event on Close button Click
appIcon | string | '' | png,svg,jpeg,jpg etc.. |  "url" or {require('..path.png')}| App Icon Source
appIconStyle | Object | {} | {all type of css styles} | {color:'#fff', ...}, | Add style to App Icon
appTitle | string | 'App Title' | all type of strings | {'Linked In'} | App title
appTitleStyles | Object | {} | {all type of css styles} | {color:'#fff', ...}, | Add style to App Title
appDescription | string | 'App Descriptions' | all type of strings | {'App  Developer Company'} | App Descriptions
appDescriptionStyle | Object | {} | {all type of css styles} | {color:'#fff', ...}, | Add style to App Descriptions
starRating | bool | true | true, false | {true} | to show or hide the Rating Stars
starRatingCount | number | 5 | 1 - 5 | {4} | Ratings of Applications out of 5 star
price | Object | {} | android,ios and Windows| {ios: '$ 10', android: 'FREE',  windows: '$ 23', }| Add Price to Apps
buttonText | string | 'View' | all type of strings | {'Insall Now'} | App Download Button title
buttonStyle | Object | {} | {all type of css styles} | {color:'#fff', ...}, | Add style to Download Button
onInstall | function | {} | {} | {()=>alert('Install Button clicked")}, | Event on Install button Click

### Donate

<p><a href="https://www.paypal.me/ajithab" rel="nofollow"><img height="75" src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" style="max-width:100%;"></a></p>



## Example

Bottom           |  Top
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/ajith-ab/react-mobile-banner/master/images/bottom.png)  |  ![](https://raw.githubusercontent.com/ajith-ab/react-mobile-banner/master/images/top.png)


## License

MIT © [Ajith A B](https://github.com/ajith-ab)
