import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgPlus = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="plus_svg__icon plus_svg__icon-tabler plus_svg__icon-tabler-plus"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M12 5v14M5 12h14" />
    </Svg>
)
export default SvgPlus
