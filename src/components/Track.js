import React from 'react'
import '../App.css'
import config from '../config'

class Track extends React.PureComponent {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        let isSelected = this.props.track[0] === this.props.currentTrack[0]

        let trackTitle = this.props.track[0] //this.props.track is an array where the first element is the track title and the second is the url

        let aspectRatio = 1808 / 1366 //Aspect ratio of the canvas (derived from main.png)
        let fontSizeDenom = 42 //Set denominator of fontSize here
        let fontSizeCalc = this.props.screenWidth > this.props.canvasWidth ? this.props.canvasHeight / fontSizeDenom * aspectRatio : this.props.screenWidth / fontSizeDenom //Calculate fontSize as a function of either canvasHeight or screenWidth. Factoring in aspectRatio in the first ternary condition smooths the breakpoint between the two conditions.
        let leftOrRightPosition = this.props.screenWidth > this.props.canvasWidth ? this.props.margin : 0 //Factor in the margin that falls outside the canvas for positioning each the left and right columns, respectively
        let textMargin = this.props.canvasHeight / 40 //Margin around each title as a function of canvasHeight

        return(
            this.props.leftColumn ?

            <div style={{position: 'relative', left: leftOrRightPosition}} onClick={() => this.props.selectTrack(this.props.track)}>
                <h1 style={{color: isSelected ? 'rgba(120,160,192,1)' : 'rgba(255,255,255,.65)', margin: textMargin, fontSize: fontSizeCalc, fontFamily: config.appFont, transition: 'all .10s'}} className='title'>{this.props.trackNumber}. {trackTitle}</h1>
            </div>

            :

            <div style={{position: 'relative', right: leftOrRightPosition}} onClick={() => this.props.selectTrack(this.props.track)}>
                <h1 style={{color: isSelected ? 'rgba(120,160,192,1)' : 'rgba(255,255,255,.65)', margin: textMargin, fontSize: fontSizeCalc, fontFamily: config.appFont, transition: 'all .10s'}} className='title'>{this.props.trackNumber}. {trackTitle}</h1>
            </div>
        )
    }
}

export default Track
