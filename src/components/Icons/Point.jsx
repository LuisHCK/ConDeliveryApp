import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgPoint = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="point_svg__icon point_svg__icon-tabler point_svg__icon-tabler-point-filled"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path
            fill="currentColor"
            stroke="none"
            d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z"
        />
    </Svg>
)
export default SvgPoint
