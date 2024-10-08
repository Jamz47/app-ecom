import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Tag(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.59 13.41l-7.17 7.17a1.998 1.998 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82v0zM7 7h.01"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Tag;
