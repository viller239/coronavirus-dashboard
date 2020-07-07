import styled from 'styled-components';

import type { ComponentType } from 'react';
import CloseIcon from "assets/close_icon.svg";


export const Container: ComponentType<*> = (() => {

    return styled.div`
        display: flex;
        justify-content: space-between;
        padding: .7em 1.5em;
        background-color: #E3F5FF;
        font-family: "GDS Transport", Arial, sans-serif;
        
        & * {
            margin: 0;
        }
  `;

})();  // Container


export const Closer: ComponentType<*> = (() => {

    return styled.button`
        background: url("${ CloseIcon }");
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center center;
        width: 20px;
        height: 20px;
        cursor: pointer;
    `;

})();  // Closer