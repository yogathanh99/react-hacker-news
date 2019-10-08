import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getStory } from '../../data/hnApi';
import { mapTime } from '../../utils';

const Wrapper = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

const StoryMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '•';
    margin: 0 7px;
  }
`;

const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color};
`;

const Story = React.memo(({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <Wrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span>
          <StoryMetaElement color='#000'>By:</StoryMetaElement> {story.by}
        </span>
        <span>
          <StoryMetaElement>Posted:</StoryMetaElement> {mapTime(story.time)}
        </span>
      </StoryMeta>
    </Wrapper>
  ) : null;
});

export default Story;
