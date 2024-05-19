import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { colors } from "../colors";
const SearchIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={colors.neutral3}
      fillRule="evenodd"
      d="M13.163 5.488c0-.385.312-.697.697-.697h5.582a.698.698 0 0 1 0 1.395H13.86a.698.698 0 0 1-.697-.698ZM13.163 8.28c0-.386.312-.699.697-.699h2.791a.698.698 0 0 1 0 1.396h-2.79a.698.698 0 0 1-.698-.698Z"
      clipRule="evenodd"
    />
    <Path
      fill={colors.neutral3}
      fillRule="evenodd"
      d="M11.535 3.395a8.136 8.136 0 0 0-8.14 8.14 8.136 8.136 0 0 0 8.14 8.14 8.136 8.136 0 0 0 8.14-8.14.698.698 0 0 1 1.395 0 9.531 9.531 0 0 1-9.535 9.535A9.531 9.531 0 0 1 2 11.535 9.531 9.531 0 0 1 11.535 2a.698.698 0 0 1 0 1.395ZM18.948 18.948a.698.698 0 0 1 .987 0l1.86 1.861a.698.698 0 0 1-.986.987l-1.86-1.86a.698.698 0 0 1 0-.988Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SearchIcon;
