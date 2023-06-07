import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgMapPin = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="map-pin_svg__icon map-pin_svg__icon-tabler map-pin_svg__icon-tabler-map-pin"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        <Path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    </Svg>
)
export default SvgMapPin
