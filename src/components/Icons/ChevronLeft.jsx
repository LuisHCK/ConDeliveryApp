import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgChevronLeft = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="chevron-left_svg__icon chevron-left_svg__icon-tabler chevron-left_svg__icon-tabler-chevron-left"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="m15 6-6 6 6 6" />
    </Svg>
)
export default SvgChevronLeft
