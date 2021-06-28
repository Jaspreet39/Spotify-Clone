import React from 'react'
import './Footer.css'
import {Grid, Slider} from "@material-ui/core"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Paul_McCartney_%26_Wings-Band_on_the_Run_album_cover.jpg/220px-Paul_McCartney_%26_Wings-Band_on_the_Run_album_cover.jpg" alt=""/>
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                  <Grid item>
                      <PlaylistPlayIcon/>
                  </Grid>
                  <Grid item>
                      <VolumeDownIcon/>
                  </Grid>
                  <Grid item xs>
                      <Slider/>
                  </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
