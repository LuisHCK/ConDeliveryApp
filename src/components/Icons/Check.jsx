import React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgCheck = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="m5 12 5 5L20 7" />
    </Svg>
)
export default SvgCheck
