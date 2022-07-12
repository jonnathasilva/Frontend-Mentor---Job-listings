import React from 'react'
import styled from 'styled-components'

import IMG from '../imgs/bg-header-desktop.svg'


import Jobs from '../components/Jobs'

const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
`

const Header = styled.header`
width: 100%;
height: 154px;
background-image: url(${IMG});
background-color: #5DA5A4;
`

const Main = styled.main`
background-color: #F0FAFB;
padding: 2rem 0;
position: relative;
`

function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Jobs />
      </Main>
    </Container>
  );
}

export default Home;