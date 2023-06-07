import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SvgUser = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="user_svg__icon user_svg__icon-tabler user_svg__icon-tabler-user"
        {...props}
    >
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </Svg>
)
export default SvgUser
