import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgShare = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="share_svg__icon share_svg__icon-tabler share_svg__icon-tabler-share"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
    </Svg>
)
export default SvgShare
