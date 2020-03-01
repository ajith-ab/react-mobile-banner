import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class MobileBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileBrowser:this.getMobileOperatingSystem(),
        };
    };
    
    getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/windows phone/i.test(userAgent)) {
            return "Windows";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
        return "unknown";
    }

    starRatings = (stars) => {
        if (stars > 5 || stars < 0) {
            return (
                <div className={styles.rating}>
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
            )
        };
        let starsData = []
        for (let i = 0; i < 5; i++) {
            var star = {};
            if (i < stars) {
                star['star'] = true;
            } else {
                star['star'] = false;
            }
            starsData.push(star)
        }
        return (
            <div className={styles.rating}>
                {starsData.map((star, i) => {
                    if (star.star) { return (<span key={i} className={styles.activeStar}>☆</span>) }
                    return (<span key={i} >☆</span>)
                })}
            </div>
        );
    }
    
    
    checkOsfeatures(Os){
        let osObjects = {};
        const { price, appId, storeText } = this.props;
        if(price[Os]){
            osObjects.price = price[Os];
        }else{
            osObjects.price = 'FREE'
        }
        if(appId[Os]){
            if(Os == 'android'){
                osObjects.url = `http://play.google.com/store/apps/details?id=${appId[Os]}`;
            }else if(Os == 'ios'){
                osObjects.url = `https://apps.apple.com/in/app/${appId[Os]}`;
            }else if(Os == 'ios'){
                osObjects.url = `http://www.windowsphone.com/s?appid=${appId[Os]}`;
            }
        }else{
            osObjects.url = '';
        }
        if(storeText[Os]){
            osObjects.storeText = storeText[Os];
            
        }
        return osObjects;
        
    }
    
    
    getOsFunctions(){
        let osInfo = {}
        if(this.state.mobileBrowser === 'Windows'){
           osInfo = this.checkOsfeatures('windows');
        }else if(this.state.mobileBrowser === 'Android'){
            osInfo = this.checkOsfeatures('android');
        }else if(this.state.mobileBrowser === 'iOS'){
            osInfo = this.checkOsfeatures('ios');
        }    
        return osInfo;
    }
    
    render() {
        let OS = this.getOsFunctions();
        const {showBanner, backgroundColor,onClose, appIcon,appIconStyle, appTitle, appTitleStyles, appDescription, topStickyBanner, position, buttonText, buttonStyle, closeButtonStyle,starRating, starRatingCount, onInstall } = this.props;
        const { mobileBrowser } = this.state;
        if(mobileBrowser && mobileBrowser == 'unknown' || !showBanner){
            return (
                <div />
            )
        }
        let positionClassName = "";
        if(position == 'bottom'){
            positionClassName = styles.bannerBottom;
        }else {
            positionClassName = styles.bannerTop;
        }
        if(topStickyBanner && position == 'top'){
            positionClassName = styles.bannerTop + ' ' + styles.bannerSticky ;
        }
        return (
            <div className={positionClassName} style={{ backgroundColor: backgroundColor }}>
                <div className={styles.banner}  >
                    <div className={styles.bannerClose}>
                        <div onClick={()=>{ onClose(); this.setState({mobileBrowser:'unknown'})}} style={closeButtonStyle}>&#x2716;</div>
                    </div>
                    <div className={styles.bannerImage}>
                        <img style={appIconStyle} className={styles.bannerIcon} src={appIcon} />
                    </div>
                    <div className={styles.bannerContents}>
                        <div className={styles.bannerTitle} style={appTitleStyles}>{appTitle}</div>
                        <div className={styles.bannerDescription}>{appDescription}</div>
                        {starRating && this.starRatings(starRatingCount)}
                        <div className={styles.bannerStoreText}>{`${OS.price} - ${OS.storeText}`}</div>
                    </div>
                    <div className={styles.bannerButton}>
                        <a className={styles.bannerButtonText} onClick={()=>onInstall()} style={buttonStyle} type="button" target={OS.url != '' && "_blank"} href={OS.url} >{buttonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}


MobileBanner.propTypes = {
    showBanner: PropTypes.bool,
    position: PropTypes.string,
    topStickyBanner: PropTypes.bool,
    backgroundColor: PropTypes.string,
    appId: PropTypes.objectOf(PropTypes.string),
    onClose: PropTypes.func,
    closeButtonStyle: PropTypes.objectOf(PropTypes.string),
    appIcon: PropTypes.string,
    appIconStyle: PropTypes.objectOf(PropTypes.string),
    appTitle: PropTypes.string,
    appTitleStyles: PropTypes.objectOf(PropTypes.string),
    appDescription: PropTypes.string,
    appDescriptionStyle: PropTypes.objectOf(PropTypes.string),
    starRatingCount: PropTypes.number,
    starRating: PropTypes.bool,
    price: PropTypes.objectOf(PropTypes.string),
    storeText: PropTypes.objectOf(PropTypes.string),
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.objectOf(PropTypes.string),
    onInstall: PropTypes.func,
};


MobileBanner.defaultProps = {
    showBanner:true,
    position: 'top',
    backgroundColor: 'green',
    topStickyBanner:false,
    appId: {
        ios: '',
        android: '',
        windows: '',
    },
    closeButtonStyle: {},
    onClose: () =>{},
    appIcon: '',
    appIconStyle: {},
    appTitle: 'App Title ',
    appTitleStyles: {},
    appDescription: 'App Descriptions .....',
    appDescriptionStyle:{},
    starRatingCount: 5,
    starRating: true,
    price: {
        ios: 'FREE',
        android: 'FREE',
        windows: 'FREE',
    },
    storeText: {
        ios: 'On the App Store',
        android: 'In Google Play',
        windows: 'In Windows Store',
    },
    buttonText: 'View',
    buttonStyle:{}, 
    onInstall:()=>{}   
}

export default MobileBanner;