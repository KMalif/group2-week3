import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import { Box } from '@mui/material';

import imgArticle from '../../static/images/img-article.png';
import imgProfile from '../../static/images/img-profile.jpg';

import classes from './style.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <header className={classes.bgHeader}>
        <div className={classes.textHeader}>
          <h1>
            <FormattedMessage id="app_header_title" />
          </h1>
          <p>
            <FormattedMessage id="app_header_sub_title" />
          </p>
          <a href="/create-post">
            <FormattedMessage id="app_header_button" />
          </a>
        </div>
      </header>
      <section>
        <div className={classes.headText}>
          <h1>
            <FormattedMessage id="app_main_content_text" />
          </h1>
        </div>
        <div className={classes.searchInput}>
          <input type="text" />
          <button type="button">
            <FormattedMessage id="app_search_button" />
          </button>
        </div>
        <Box sx={{ flexGrow: 1, paddingX: 4, paddingY: 4, gap: 2 }}>
          <div className={classes.boxGrid}>
            <div className={classes.description}>
              <p>
                Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate
                low-risk high-yield ROI rather than adaptive e-tailers. Progressively morph standardized value vis-a-vis
                just in time portals. Quickly repurpose ethical vortals rather than technically sound systems.
                Intrinsicly formulate.
              </p>
              <div className={classes.boxProfile}>
                <img src={imgProfile} alt="Profile" />
                <p>Arnold Johnson</p>
              </div>
            </div>
            <img className={classes.imgGrid} src={imgArticle} alt="Article" />
          </div>
          <div className={classes.boxGrid}>
            <div className={classes.description}>
              <p>
                Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate
                low-risk high-yield ROI rather than adaptive e-tailers. Progressively morph standardized value vis-a-vis
                just in time portals. Quickly repurpose ethical vortals rather than technically sound systems.
                Intrinsicly formulate.
              </p>
              <div className={classes.boxProfile}>
                <img src={imgProfile} alt="Profile" />
                <p>Arnold Johnson</p>
              </div>
            </div>
            <img className={classes.imgGrid} src={imgArticle} alt="Article" />
          </div>
          <div className={classes.boxGrid}>
            <div className={classes.description}>
              <p>
                Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate
                low-risk high-yield ROI rather than adaptive e-tailers. Progressively morph standardized value vis-a-vis
                just in time portals. Quickly repurpose ethical vortals rather than technically sound systems.
                Intrinsicly formulate.
              </p>
              <div className={classes.boxProfile}>
                <img src={imgProfile} alt="Profile" />
                <p>Arnold Johnson</p>
              </div>
            </div>
            <img className={classes.imgGrid} src={imgArticle} alt="Article" />
          </div>
          <div className={classes.boxGrid}>
            <div className={classes.description}>
              <p>
                Monotonectally pursue backward-compatible ideas without empowered imperatives. Interactively predominate
                low-risk high-yield ROI rather than adaptive e-tailers. Progressively morph standardized value vis-a-vis
                just in time portals. Quickly repurpose ethical vortals rather than technically sound systems.
                Intrinsicly formulate.
              </p>
              <div className={classes.boxProfile}>
                <img src={imgProfile} alt="Profile" />
                <p>Arnold Johnson</p>
              </div>
            </div>
            <img className={classes.imgGrid} src={imgArticle} alt="Article" />
          </div>
        </Box>
      </section>
    </div>
  );
};

export default Home;
