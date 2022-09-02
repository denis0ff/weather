import CalendarWidget from '@components/CalendarWidget'
import CityWidget from '@components/CityWidget'
import DateWidget from '@components/DateWidget'
import WeatherWidget from '@components/WeatherWidget'
import { useCityWeather } from '@hooks'
import { Aside, Container, Footer, Main, Wrapper, MainWrapper } from './styled'

const Home = () => {
  const { weather } = useCityWeather()
  const bg = weather ? weather[0].icon : 'error'

  return (
    <Wrapper bg={bg}>
      <Container bg={bg}>
        <MainWrapper>
          <Main>
            <DateWidget />
            <CalendarWidget />
          </Main>
          <Aside>
            <CityWidget />
          </Aside>
        </MainWrapper>
        <Footer>
          <WeatherWidget />
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default Home
