import { MutatingDots } from 'react-loader-spinner'
import Spinner from './styled'

const LOADER_SIZE = 100

export default () => {
  return (
    <Spinner>
      <MutatingDots height={LOADER_SIZE} width={LOADER_SIZE} />
    </Spinner>
  )
}
