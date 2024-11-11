import { createBreakpoint } from 'react-use'
import { DisplayBreakpoints } from 'src/helpers/consts'

export const useBreakPoint = () => {
	return createBreakpoint({ M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm })
}
