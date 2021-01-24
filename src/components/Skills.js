import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import react from '../assets/react.png';
import reactNative from '../assets/react-native.png';
import apollo from '../assets/apollo.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.jpg';
import redux from '../assets/redux.png';
import js from '../assets/js.png';
import graphql from '../assets/graphql.png';
import node from '../assets/node.jpg';
import express from '../assets/express.jpg';
import css from '../assets/css.png';
import aws from '../assets/aws-logo.png';

const skills = [
  {
    image: react,
    name: 'React',
    skill: 'Advanced'
  },
  {
    image: reactNative,
    name: 'React Native',
    skill: 'Advanced'
  },
  {
    image: node,
    name: 'Node',
    skill: 'Intermediate'
  },
  {
    image: aws,
    name: 'AWS',
    skill: 'Intermediate'
  },
  {
    image: apollo,
    name: 'Apollo',
    skill: 'Intermediate'
  },
  {
    image: graphql,
    name: 'GraphQL',
    skill: 'Intermediate'
  },
  {
    image: redux,
    name: 'Redux',
    skill: 'Advanced'
  },
  {
    image: css,
    name: 'CSS3',
    skill: 'Advanced'
  },
  {
    image: js,
    name: 'JavaScript',
    skill: 'Advanced'
  },
  {
    image: mysql,
    name: 'MySQL',
    skill: 'Intermediate'
  },
  {
    image: mongodb,
    name: 'MongoDB',
    skill: 'Intermediate'
  },
  {
    image: express,
    name: 'Express',
    skill: 'Intermediate'
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: '1vw',
      padding: '3vw',
      textAlign: 'center'
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {skills.map((item, index) => (
        <Paper key={index} elevation={5}>
          <img src={item.image} width="150px" style={{borderRadius: '50%'}} />
          <h2>{item.name}</h2>
          <h3>{item.skill}</h3>
      </Paper>
      ))}
    </div>
  );
}
