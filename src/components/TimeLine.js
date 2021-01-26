import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px 20px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  opposite: {
    flex: 'inherit'
  },
}));

export function ExperienceTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent className={classes.opposite}>
          <Typography style={{marginLeft: '10px'}} variant="body2" color="textSecondary">
            Dec 2020 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <BusinessCenterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>NewAge Products Inc</b>, Mumbai - Software Engineer
            </Typography>
            <ul>
              <li><Typography>Solely responsible for migration of existing websites from Wordpress to React</Typography></li>
              <li><Typography>Responsible for development of new feature and enhancement of current ones.</Typography></li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.opposite}>
          <Typography variant="body2" color="textSecondary">
            Feb 2020 - Nov 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessCenterIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>Wednesday Solutions</b>, Pune - Software Engineer
            </Typography>
            <ul>
              <li><Typography>Build app which supports internationalization</Typography></li>
              <li><Typography>Worked on React library with redux-saga and jest</Typography></li>
              <li><Typography>Delivered various dynamic UI with API integrations</Typography></li>
              <li><Typography>Achieved and delivered daily targets (Agile Team)</Typography></li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent className={classes.opposite}>
          <Typography variant="body2" color="textSecondary">
            Mar 2019 - Oct 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <BusinessCenterIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>CalQlum Internet Pvt Ltd</b>, New Delhi - React Developer Intern
            </Typography>
            <ul>
              <li><Typography>Worked on ReactJs - Javascript library</Typography></li>
              <li><Typography>Worked on React Native - Javascript framework for mobile apps</Typography></li>
              <li><Typography>Delivered various dynamic views based on designs provided</Typography></li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function EducationTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent className={classes.opposite}>
          <Typography variant="body2" color="textSecondary">
            Aug 2016 - Aug 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>Synergy Institute of Engg and Tech</b>, Odisha
            </Typography>
            <Typography>Branch - Coumpter Science Enginnering (Hons.)</Typography>
            <Typography>CGPA - 7.5</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.opposite}>
          <Typography variant="body2" color="textSecondary">
            Mar 2014 - Mar 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>Church School, Beldih</b>, Jamshedpur (XII)
            </Typography>
            <Typography>Result - 63.33%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent className={classes.opposite}>
          <Typography className="march" variant="body2" color="textSecondary">
            Mar 2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              <b>Church School, Beldih</b>, Jamshedpur (X)
            </Typography>
            <Typography>Result - 68.83%</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
