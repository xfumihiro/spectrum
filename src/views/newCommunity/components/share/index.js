// @flow
import React from 'react';
// $FlowFixMe
import { withRouter } from 'react-router';
// $FlowFixMe
import compose from 'recompose/compose';
import { OutlineButton, Button } from '../../../../components/buttons';
import { ButtonRow, InputRow, Input } from './style';
import { Description } from '../../style';
import { Loading } from '../../../../components/loading';

const Share = ({ community, history }) => {
  if (!community) return <Loading />;

  const highlightAndCopy = e => {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNode(e.target);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  };

  return (
    <div>
      <ButtonRow>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://spectrum.chat/${community.slug}&t=Come hang out with me in the ${community.name} community on Spectrum!`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            icon="facebook"
            gradientTheme={'none'}
            hoverColor={'social.facebook.default'}
            color={'social.facebook.default'}
          >
            Share on Facebook
          </Button>
        </a>
        <a
          href={`https://twitter.com/share?text=Come hang out with me in the ${community.name} community on @withspectrum!&url=https://spectrum.chat/${community.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            icon="twitter"
            gradientTheme={'none'}
            hoverColor={'social.twitter.default'}
            color={'social.twitter.default'}
          >
            Share on Twitter
          </Button>
        </a>
      </ButtonRow>

      <InputRow>
        <Input onClick={highlightAndCopy}>
          {`https://spectrum.chat/${community.slug}`}
        </Input>
      </InputRow>

      <ButtonRow>
        <Description centered>
          You're ready to start building your community - you can view it now,
          or manage your settings at any time
        </Description>
        <OutlineButton
          onClick={() => history.push(`/${community.slug}/settings`)}
        >
          View community settings
        </OutlineButton>
        <Button onClick={() => history.push(`/${community.slug}`)}>
          Go to my community
        </Button>
      </ButtonRow>
    </div>
  );
};

export default compose(withRouter)(Share);