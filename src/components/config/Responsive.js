import React from 'react';
import {useMediaQuery} from 'react-responsive';

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:550px)"
  });

  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:551px)"
  });

  return <>{isPc && children}</>
}