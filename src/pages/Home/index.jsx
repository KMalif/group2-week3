import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Box } from '@mui/material';
import { getAllPost } from './actions';
import { selectAllPost } from './selectors';

import imgProfile from '../../static/images/img-profile.jpg';

import classes from './style.module.scss';

const Home = ({ selectPost }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(
      getAllPost(
        (res) => {
          setData(res);
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }, [dispatch]);

  useEffect(() => {
    setData(selectPost);
  }, [selectPost]);

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
          {data?.map((item, index) => (
            <div key={index} className={classes.boxGrid}>
              <div className={classes.desc}>
                <p>{item.description}</p>
                <div className={classes.boxProfile}>
                  <img src={imgProfile} alt="Profile" />
                  <p>Arnold Johnson</p>
                </div>
              </div>
              <img className={classes.imgGrid} src={item.imageURL} alt="Article" />
            </div>
          ))}
        </Box>
      </section>
    </div>
  );
};

Home.propTypes = {
  selectPost: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  selectPost: selectAllPost,
});

export default connect(mapStateToProps)(Home);
