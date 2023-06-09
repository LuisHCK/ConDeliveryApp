import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const GrillIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775V8zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" />
    </Svg>
)
export default GrillIcon
