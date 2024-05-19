import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { colors } from "../colors"
const BackButton = (props: SvgProps) => (
  <Svg
    width={9}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill={colors.neutral3}
      d="M7.5 14.725a.618.618 0 0 1-.442-.183L1.624 9.108a2.284 2.284 0 0 1 0-3.216L7.058.458a.629.629 0 0 1 .883 0 .629.629 0 0 1 0 .884L2.508 6.775c-.4.4-.4 1.05 0 1.45l5.433 5.433a.629.629 0 0 1 0 .884.655.655 0 0 1-.442.183Z"
    />
  </Svg>
)
export default BackButton
