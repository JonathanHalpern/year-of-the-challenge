import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Columns from 'react-columns';
import EMOJIS from '../constants/emojis';
import DIFFICULTIES from '../constants/difficultyColors';

const StyledColumns = styled(Columns)`
  width: 100%;
`;

const ChallengeColorBlock = styled.div`
  background: ${props => props.background};
  width: 30px;
  height: 30px;
`;

const EmojiContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;


const EmojiImage = styled.img`
  height: 30px;
  width: 30px;
  margin: 0;
`;

const EmojiLabel = styled.p`
  margin: 0 0 0 5px;
`;

const queries = [{
  columns: 1,
  query: 'min-width: 200px',
}, {
  columns: 3,
  query: 'min-width: 600px',
}];

class ChallengeKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Key</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <StyledColumns queries={queries}>
            {[..._.map(DIFFICULTIES, difficulty => (
              <EmojiContainer key={difficulty.label}>
                <ChallengeColorBlock background={difficulty.background} />
                <EmojiLabel>{difficulty.label} </EmojiLabel>
              </EmojiContainer>
            )),
              ..._.map(EMOJIS, emoji => (
                <EmojiContainer key={emoji.label}>
                  <EmojiImage src={emoji.src} />
                  <EmojiLabel>{emoji.label} </EmojiLabel>
                </EmojiContainer>
              ))]
            }
          </StyledColumns>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default ChallengeKey;
