import React from 'react';
import loadable from "@loadable/component";
import styled from "styled-components";
import {screens, colors} from '../utilities';
import Logo from "../assets/logo.svg";

//Page loader style
const PreloaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors['color-light']};
    position: relative;
    img {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media ${screens.mobileL} {
          width: 30%;
        }
    }
`

export const Preloader = (
  <PreloaderWrapper>
    <img src={Logo} alt="preloader logo" />
  </PreloaderWrapper>
);

export const Home = loadable(() => import("../pages/home"), {
  fallback: Preloader,
});

//for more info about use of loadable-components -> https://github.com/gregberge/loadable-components
