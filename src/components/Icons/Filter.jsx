import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgFilter = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="filter_svg__icon filter_svg__icon-tabler filter_svg__icon-tabler-filter"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M4 4h16v2.172a2 2 0 0 1-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4z" />
    </Svg>
)
export default SvgFilter
