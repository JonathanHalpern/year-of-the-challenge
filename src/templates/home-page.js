import React from 'react';
import styled from 'styled-components';
import engagementPhoto from '../../static/img/engagementPhoto.jpg';

const StyledSection = styled.div`
  p {
    display: flex;
    img {
      max-width: 400px;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

const HomePageTemplate = () => (
  <StyledSection>
    <h1>About us</h1>
    <p>
      When it comes to writing blogs, it is common sense that you play to your strengths.
      We are not great cooks or talented sportspersons;
      we are about as adept with a camera as your average macaques monkey
      (and much worse at taking selfies).
      We might fancy ourselves as the next Bear Grylls and Megan Hine,
      but the harsh reality is that we are more likely to be killed by a stingray
      than survive a desert night inside the skin of a camel.
    </p>
    <p>
      The last thing we want to do is describe to you how we found ourselves
      under the orange glow of a Cambodian sunrise,
      or how the Great Wall of China put our small lives into perspective.
      No one needs that shit.
    </p>
    <p>
      So what have we got?
    </p>
    <p>
      <img role="presentation" src={engagementPhoto} />
    </p>
    <br />
    <p>
      We&apos;re up for stuff.
      Whether it&apos;s on or off the beaten trail,
      socially acceptable or  - more often than not - way beyond the line,
      we&apos;ll usually give it a go.
      And, from previous experience,
      we&apos;ve found being open to a challenge usually ends in a good anecdote.
    </p>
    <p>
      When Jonny first met me,
      one of the first compliments he gave was that I was a &quot;proper dog&quot;.
      Immediately, I knew he meant that I was more of a border collie than a toy poodle:
      I&apos;d sooner jump into the sea to fetch a stick
      than get my hair coiffured at the local salon.
      It was only a few months later that I realised that,in most relationships,
      calling your girlfriend a &quot;proper dog&quot; might not be interpreted so well.
    </p>
    <p>
      So we&apos;ve decided, whilst China is celebrating the Year of the Dog,
      we want to be proper dogs and blog all about our silly adventures around Asia.
      Throw us a stick and we&apos;ll do our very best to jump in and fetch it for you.
      Whether it&apos;s sending a challenge you think we&apos;ll enjoy,
      or setting us something that sounds socially daring,
      please email in. We&apos;ve already compiled a heap from our engagement party,
      where friends + alcohol + a challenge box = some pretty ridiculous dares.
      So, even if you think it&apos;s a bit off-the-wall,
      send it in: we&apos;ve probably seen worse.
    </p>
  </StyledSection>
);

export default HomePageTemplate;
