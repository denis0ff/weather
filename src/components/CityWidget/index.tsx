import { useSelector, useDispatch } from 'react-redux'
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react'
import { RootState } from '@store'
import { setApi, setCity, setCityByIp, setType } from '@store/actions'
import { weatherApis, weatherTypes } from '@constants'
import Loader from '@components/Loader'
import { ErrorMessage } from '@theme'
import { Switcher, CityInput, CityName, Container, CountryName } from './styled'

const CityWidget = () => {
  const {
    coordinates: { city, country },
    api,
    type,
    error,
    isLoading,
  } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch()

  const [currentCity, setCurrentCity] = useState(city)

  const handleSearchCity: KeyboardEventHandler<HTMLInputElement> = e => {
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
    else dispatch(setCity(city))
  }, [])

  const handleCityChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => setCurrentCity(value)

  useEffect(() => setCurrentCity(city), [city])

  const handleTypeChange: ChangeEventHandler<HTMLSelectElement> = ({
    currentTarget: { value },
  }) => dispatch(setType(value))

  return (
    <Container>
      <CityInput
        value={currentCity}
        type="text"
        onKeyUp={handleSearchCity}
        onChange={handleCityChange}
      />
      <Switcher defaultValue={api} onChange={handleApiChange}>
        {weatherApis.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Switcher>
      <Switcher value={type} onChange={handleTypeChange}>
        {weatherTypes.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Switcher>
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && !error && (
        <>
          <CityName>{city}</CityName>
          <CountryName>{country}</CountryName>
        </>
      )}
    </Container>
  )
}

export default CityWidget
