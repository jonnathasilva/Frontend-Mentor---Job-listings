import React, { useContext } from 'react'
import styled from 'styled-components'

import { Context } from '../context/JobsContext';

const Container = styled.div`
width: 80%;
margin: 0 auto;
background-color: #FFF;
margin-bottom: 1rem;
padding: 20px 40px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
border-left: ${props => props.isBorder ? "#5AA5A1 5px solid" : "none"};
@media (max-width: 720px) {
  width: 65%;
  flex-direction: column;
  align-items: flex-start;
}
`

const Box = styled.div`
display: flex;
align-items: center;
&:nth-child(1){
  @media (max-width: 720px) {
  flex-direction: column;
  align-items: flex-start;
}
}
`

const ContainerImg = styled.div`
margin-right: 20px;
`

const Img = styled.img`
object-fit: contain;
height: 70px;
`

const ContainerTitle = styled.div`
display: grid;
`

const Company = styled.h3`
font-size: 15px;
color: #65A49C;
`

const Status = styled.span`
text-transform: uppercase;
font-size: 11px;
color: #FFF;
padding: 3px 5px;
border-radius: 10px;
&:nth-child(1){
  margin: 0 5px 0  10px;
  background-color: #64AFAA;
}
&:nth-child(2){
  background-color: #263434;
}
`

const Position = styled.h1`
font-size: 15px;
color: #3D4746;
&:hover{
  color: #65A49C;
}
`

const Info = styled.span`
font-size: small;
color:  #949D9A;
&:nth-child(2),
&:nth-child(4) {
  margin: 0 10px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #949D9A;
}
`

const ContainerDescription = styled.div`
display: flex;
flex-wrap: wrap;
`

const Description = styled.p`
margin: 0 10px;
color: #669E9D;
background-color: #ECF6F7;
padding: 5px;
border-radius: 5px;
font-size: 15px;
font-weight: 700;
cursor: pointer;
&:hover {
  color: #EAFFFF;
  background-color: #5DA4A6;
}
`


function Jobs() {
  const { jobs } = useContext(Context)

  return (
    <>
      {
        jobs.map((item, i) => (
          <Container isBorder={item.featured} key={i}>
            <Box>
              <ContainerImg>
                <Img src={item.logo} alt={item.company} />
              </ContainerImg>
              <ContainerTitle>
                <Company>
                  {item.company}
                  {
                    item.new ?
                      (<Status>new!</Status>)
                      : " "
                  }
                  {
                    item.featured ?
                      (<Status>Featured</Status>)
                      : " "
                  }
                </Company>
                <Position>
                  {item.position}
                </Position>
                <Box>
                  <Info>{item.postedAt}</Info>
                  <Info />
                  <Info>{item.contract} </Info>
                  <Info />
                  <Info>{item.location}</Info>
                </Box>
              </ContainerTitle>
            </Box>
            <ContainerDescription>
              <Description>{item.role}</Description>
              <Description>{item.level}</Description>
              {item.languages.map((languages) => (
                <Description>{languages}</Description>
              ))}
              {item.tools.length > 0 ? (
                <Description>{item.tools}</Description>
              ) : " "}
            </ContainerDescription>
          </Container>
        ))
      }
    </>
  );
}

export default Jobs;