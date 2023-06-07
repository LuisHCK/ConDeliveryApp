import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgMinus = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="minus_svg__icon minus_svg__icon-tabler minus_svg__icon-tabler-minus"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M5 12h14" />
    </Svg>
)
export default SvgMinus
