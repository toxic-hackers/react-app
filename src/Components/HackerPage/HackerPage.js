import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { withRouter } from 'react-router-dom';

//Import components
import SocialButton from './SocialButton';
import HackerPageTabs from './HackerPageTabs/HackerPageTabs';
import HackerPageCommentList from './CommentsTable/HackerPageCommentList';
import LightLineIndividualCommentsSentiment from '../Chart/LightLineIndividualCommentsSentiment';
import DarkLineIndividualCommentsSentiment from '../Chart/DarkLineIndividualCommentsSentiment';
import LightBarIndividualCommentsAmount from '../Chart/LightBarIndividualCommentsAmount';
import DarkBarIndividualCommentsAmount from '../Chart/DarkBarIndividualCommentsAmount';

//Import colors
import { dtWhiteFont, dtDarkBlue, ltBlackFont, ltWhite } from '../../colors.js';

//Default export, exported at the bottom with withRouter
function HackerPage(props) {
    const { hackerName } = props;
    return (
        <SDHackerPageEnvContainer>
            <SDHackerPageContainer>
                <SDHackerPageHeading>{hackerName}</SDHackerPageHeading>
                {hackerName && <SocialButton hackerName={hackerName} />}
                <HackerPageTabs
                    dateOfFirstComment={props.dateOfFirstComment}
                    countOfAllComments={props.countOfAllComments}
                    countOfSaltyComments={props.countOfSaltyComments}
                    rankAmountOfSaltiness={props.rankAmountOfSaltiness}
                    rankOverallSaltiness={props.rankOverallSaltiness}
                    rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
                    averageSaltiness={props.averageSaltiness}
                />
                {props.monthlyPlot && <SDHackerPageHeading>{hackerName}'s toxicity score over time</SDHackerPageHeading>}
                {props.monthlyPlot && props.theme === 'dark' && <DarkLineIndividualCommentsSentiment monthlyPlot={props.monthlyPlot} />}
                {props.monthlyPlot && props.theme === 'light' && <LightLineIndividualCommentsSentiment monthlyPlot={props.monthlyPlot} />}
                {props.monthlyPlot && <SDHackerPageHeading>{hackerName}'s count of toxic comments over time</SDHackerPageHeading>}
                {props.monthlyPlot && props.theme === 'dark' && <DarkBarIndividualCommentsAmount monthlyPlot={props.monthlyPlot} />}
                {props.monthlyPlot && props.theme === 'light' && <LightBarIndividualCommentsAmount monthlyPlot={props.monthlyPlot} />}
                {props.saltiestComments && <SDHackerPageHeading>{hackerName}'s most toxic comments</SDHackerPageHeading>}
                {props.saltiestComments && <HackerPageCommentList saltiestComments={props.saltiestComments} />}
            </SDHackerPageContainer>
        </SDHackerPageEnvContainer>
    );
}

//Theming
const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const backgroundColor = theme('mode', {
    light: ltWhite,
    dark: dtDarkBlue
});

//Styled components
const SDHackerPageEnvContainer = styled.div`
    /*themed*/
    color: ${textColor};
    background-color: ${backgroundColor};
    /*non-themed*/
    width: 100vw;
    height: auto;
    min-height: 90vh;
    display: flex;
    justify-content: center;
`;

const SDHackerPageContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div.focus,
    div:focus {
        outline: 0;
        box-shadow: none !important;
    }
    @media (max-width: 1100px) {
        width: 90%;
    }
    @media (max-width: 900px) {
        width: 95%;
    }
`;

const SDHackerPageHeading = styled.div`
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    margin: 5vh 0 0 0;
    padding: 70px 0 50px 0;
    text-align: center;
    @media (max-width: 600px) {
        margin: 5vh 0 0 0;
    }
`;

export default withRouter(HackerPage);
