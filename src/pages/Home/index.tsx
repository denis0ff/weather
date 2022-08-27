import Calendar from '@components/Calendar'
import CityWidget from '@components/CityWidget'
import DateWidget from '@components/DateWidget'
import WeatherWidget from '@components/WeatherWidget'
import { useCityWeather } from '@hooks'
import { Aside, Container, Footer, Main, Wrapper } from './styled'

const Home = () => {
  const { today } = useCityWeather()
  const bg = today ? today.icon : 'error'
  return (
    <Wrapper bg={bg}>
      <Container bg={bg}>
        <Main>
          <DateWidget />
          <Calendar />
        </Main>
        <Aside>
          <CityWidget />
        </Aside>
        <Footer>
          <WeatherWidget />
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default Home
