import React from 'react';
import { HTMLContent } from '../components/Content';
import SubmitChallengeForm from '../components/SubmitChallengeForm';

export default ({ data: { currentPageMarkdown } }) => (
  <div>
    <HTMLContent
      content={currentPageMarkdown.html}
    />
    <SubmitChallengeForm />
  </div>
);

export const submitPageQuery = graphql`
  query SubmitPage($path: String!) {
    ...CurrentPageFragment
  }
`;
