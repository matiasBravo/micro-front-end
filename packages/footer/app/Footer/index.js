import React from 'react';
import { jsx, css } from '@emotion/core';

const footerStyle = css`
  background: #0d0d0d;
  padding: 0 1em;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;
const Footer = () => <div css={footerStyle}>Copyright 2019 microfrontend</div>;
export default Footer;
