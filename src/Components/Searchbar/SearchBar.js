import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import images
import searchIconDark from '../../img/icon-search-darkblue.svg';
import searchIconLight from '../../img/icon-search-light.svg';

//Import colors
import { ltLightGray, ltBlackFont, ltPlaceholder, dtLightBlue, dtPurple, dtWhiteFont, dtPlaceholder } from '../../colors.js';

//Import components
import SearchMessagesAndLoader from './SearchMessagesAndLoader';
//Export default component
export default function SearchBar(props) {
    const hackerNameRef = useRef();
    const clearInput = () => {
        hackerNameRef.current.value = '';
    };
    return (
        <SDSearchContainer>
            <SDFormSearchBar
                onSubmit={e => {
                    e.preventDefault();
                    props.redirectToHackerProfilePage(hackerNameRef.current.value);
                    clearInput();
                }}>
                <SDInputSearchBar placeholder="Search" ref={hackerNameRef} />
                <input data-testid="submit-search-bar" className="submitButton" type="submit" value="" />
            </SDFormSearchBar>
            <SearchMessagesAndLoader error={props.error} loading={props.loading} />
        </SDSearchContainer>
    );
}

//Theming
const searchIcon = theme('mode', {
    light: `url(${searchIconLight})`,
    dark: `url(${searchIconDark})`
});

const backgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtLightBlue
});

const submitBackgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtPurple
});

const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const placeholderColor = theme('mode', {
    light: ltPlaceholder,
    dark: dtPlaceholder
});

const SDInputSearchBar = styled.input`
    /*themed */
    background-color: ${backgroundColor};
    border: none;
    color: ${textColor};
    /*non-themed*/
    height: 100%;
    width: 100%;
    padding-left: 15px;

    border-radius: 6px 0 0 6px;

    font-weight: 400;
    ::placeholder {
        /*themed */
        color: ${placeholderColor};
        /*non-themed*/
        font-size: 0.9rem;
        font-weight: bold;
    }
`;

const SDFormSearchBar = styled.form`
    height: 100%;
    min-height: 35px;
    width: 100%;
    display: flex;

    .submitButton {
        /*themed*/
        border: none;
        background-color: ${submitBackgroundColor};
        background-image: ${searchIcon};
        /*non-themed*/
        border-radius: 0 6px 6px 0;
        width: 35px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 1rem;
        cursor: pointer;
    }
`;

const SDSearchContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;
