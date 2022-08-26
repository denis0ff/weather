import { useSelector, useDispatch } from 'react-redux'
import { ChangeEventHandler, KeyboardEventHandler, useEffect } from 'react'
import { RootState } from '@store'
import { setApi, setCity, setCityByIp } from '@store/actions'
import { weatherApis } from '@constants'
import {
  ApiSwitcher,
  CityInput,
  CityName,
  Container,
  CountryName,
} from './styled'

const CityWidget = () => {
  const {
    coordinates: { city, country },
    api,
  } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  const handleCityChange: KeyboardEventHandler<HTMLInputElement> = e => {
    const value = e.currentTarget.value.trim()
    if (e.key === 'Enter') {
      dispatch(setCity(value))
    }
  }

  const handleApiChange: ChangeEventHandler<HTMLSelectElement> = ({
    currentTarget: { value },
  }) => {
    dispatch(setApi(value))
  }

  useEffect(() => {
    if (!city) dispatch(setCityByIp())
  }, [])

  return (
    <Container>
      <CityInput defaultValue={city} type="text" onKeyUp={handleCityChange} />
      <ApiSwitcher defaultValue={api} onChange={handleApiChange}>
        {weatherApis.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </ApiSwitcher>
      <CityName>{city}</CityName>
      <CountryName>{country}</CountryName>
    </Container>
  )
}

export default CityWidget
