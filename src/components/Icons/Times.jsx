import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgTimes = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="times_svg__icon times_svg__icon-tabler times_svg__icon-tabler-x"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M18 6 6 18M6 6l12 12" />
    </Svg>
)
export default SvgTimes
