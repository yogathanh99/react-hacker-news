import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #202020;
    background-color: #fafafe;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export const selectFields = ({ id, by, url, time, title } = {}) => ({
  id,
  by,
  url,
  time,
  title,
});

export const mapTime = timestamp => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
};
