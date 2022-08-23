import { useSelector, useDispatch } from 'react-redux'
import { KeyboardEventHandler } from 'react'
import { RootState } from '@store'
import { setCity, setCityByIp } from '@store/actions'

export default () => {
  const { city } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  const handleCityChange: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      dispatch(setCity(e.currentTarget.value))
    }
  }

  return (
    <section>
      <h1>{city}</h1>
      <input type="text" onKeyUp={handleCityChange} />
    </section>
  )
}
