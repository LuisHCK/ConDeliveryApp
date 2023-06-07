import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgHeart = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="heart_svg__icon heart_svg__icon-tabler heart_svg__icon-tabler-heart"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    </Svg>
)
export default SvgHeart
