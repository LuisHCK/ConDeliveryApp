import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgMotorbike = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="motorbike_svg__icon motorbike_svg__icon-tabler motorbike_svg__icon-tabler-motorbike"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M2 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7.5 14h5l4-4H6m1.5 4 4-4" />
        <Path d="M13 6h2l1.5 3 2 4" />
    </Svg>
)
export default SvgMotorbike
