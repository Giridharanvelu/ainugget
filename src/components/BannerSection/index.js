import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ModalVideo from 'react-modal-video';

import bgimg1 from '../../images/bg1.jpg';
import playIcon from '../../images/icon/play-button.svg';

import './style.scss';

const BannerSection = () => {
    const [open, setOpen] = useState(false);
    return (
        <Grid className="container" container spacing={4}>
            <Grid item xs={12}>
                <Grid className="bannerSection" style={{background: `url(${bgimg1}) center/cover no-repeat`}}>
                    <Button className="playButton" onClick={() => setOpen(true)}><img src={playIcon} alt="playIcon"/></Button>
                    <br/>
                    <strong>FEATURED CASES</strong>
                    <h4>Completed Projects</h4>
                </Grid>
            </Grid>
            <ModalVideo channel='youtube' isOpen={open} videoId='nmtU38oHBJM' onClose={() => setOpen(false)} />
        </Grid>
    )
};

export default BannerSection;