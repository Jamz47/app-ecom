import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Columns(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 3v18m0-18h7a2 2 0 012 2v14a2 2 0 01-2 2h-7V3zm0 0H5a2 2 0 00-2 2v14a2 2 0 002 2h7V3z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Columns;
