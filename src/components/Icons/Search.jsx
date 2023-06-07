import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgSearch = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="search_svg__icon search_svg__icon-tabler search_svg__icon-tabler-search"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
    </Svg>
)
export default SvgSearch
