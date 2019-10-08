import { useEffect, useState } from 'react';
import { MAX_STORIES, STORY_INCREMENT } from '../../constants';

export const useScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) setCount(MAX_STORIES);
    else {
      setCount(count + STORY_INCREMENT);
    }
    setLoading(false);
  }, [count, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { count };
};
