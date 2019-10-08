import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Story from '../../components/Story';
import { getStoryIds } from '../../data/hnApi';
import { useScroll } from '../hooks/useScroll';

const Wrapper = styled.main`
  max-width: 900px;
  padding: 20px 15px;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useScroll();

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Title>Hacker News</Title>
      {storyIds.slice(0, count).map((storyId, i) => (
        <Story key={i} storyId={storyId} />
      ))}
    </Wrapper>
  );
};

export default Stories;
