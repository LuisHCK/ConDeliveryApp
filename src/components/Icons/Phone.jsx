import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgPhone = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="phone_svg__icon phone_svg__icon-tabler phone_svg__icon-tabler-phone"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </Svg>
)
export default SvgPhone
