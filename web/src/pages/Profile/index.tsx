import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <div className="body-content">
      <div className="page container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-3">
            <div>
              <Avatar alt="Remy Sharp" src="https://im0-tub-ru.yandex.net/i?id=ff8508b39a55f2612accce5fb31285bd&n=13" className={classes.large} />
            </div>
          </div>
          <div className="col-9">dfdf</div>
        </div>
      </div>
    </div>
  );
}
