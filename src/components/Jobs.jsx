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
box-shadow: 0px 12px 11px #d5eaed;
@media (max-width: 720px) {
  width: 85%;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 4rem;
}
@media (max-width: 290px) {
padding-left: 10px;
}
`

const Box = styled.div`
display: flex;
align-items: center;
&:nth-child(1){
  @media (max-width: 720px) {
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  position: inherit;
  top: -45px;
}
}
`

const ContainerImg = styled.div`
margin-right: 20px;
`

const Img = styled.img`
object-fit: contain;
height: 70px;
@media (max-width: 720px) {
  height: 50px;
  margin-bottom: 15px;
}
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
font-size: 15px;
font-weight: 500;
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
margin: 15px 0;
cursor: pointer;
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
@media (max-width: 720px) {
  font-size: 15px;
  font-weight: 500;
}
`

const ContainerDescription = styled.div`
display: flex;
flex-wrap: wrap;
`

const Description = styled.p`
margin: 0 10px 10px;
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

const Border = styled.div`
display: none;
@media (max-width: 720px) {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: solid 1px #BFC1C0 ;
}
`

const ContainerFilter = styled.div`
width: 80%;
margin: 0 auto;
background-color: #FFF;
padding: 5px 40px;
padding-top: 15px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
position: inherit;
top: -60px;
box-shadow: 0px 12px 11px #d5eaed;
@media (max-width: 720px) {
  width: 85%;
  padding: 20px;
}
`


const Clear = styled.p`
color: #889291;
font-size: 15px;
font-weight: 700;
cursor: pointer;
&:hover {
  color: #5DA4A6;
  border-bottom: 1px solid #5DA4A6;
}
`

const ConatinerClear = styled.div`
margin: 0 10px 10px;
display: flex;
`

const DescriptionFilter = styled.p`
color: #669E9D;
background-color: #ECF6F7;
padding: 5px;
border-radius: 5px 0 0 5px;
font-size: 15px;
font-weight: 700;

/* &:hover {
  color: #EAFFFF;
  background-color: #5DA4A6;
} */
`

const MyClear = styled.button`
border: none;
background-color: #58A4A2;
padding: 5px 10px;
border-radius: 0 5px 5px 0;
cursor: pointer;
&:hover {
  background-color: #283636;
}
`

function Jobs() {
  const { jobs, Search, Filter, Clean, OneClean } = useContext(Context)

  return (
    <>
      {
        Filter.length > 0
          ? (
            <ContainerFilter>
              <ContainerDescription>
                {Filter.map((item, i) => (
                  <ConatinerClear key={i}>
                    <DescriptionFilter >{item}</DescriptionFilter>
                    <MyClear onClick={() => OneClean(item)} >X</MyClear>
                  </ConatinerClear >
                ))}
              </ContainerDescription>
              <Clear onClick={() => Clean()} >Clear</Clear>
            </ContainerFilter>
          )
          : " "
      }
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
            <Border />
            <ContainerDescription>
              <Description onClick={() => Search(item.role)} >{item.role}</Description>
              <Description onClick={() => Search(item.level)} >{item.level}</Description>
              {item.languages.map((languages, i) => (
                <Description key={i} onClick={() => Search(languages)} >{languages}</Description>
              ))}
              {item.tools.length > 0 ? (
                item.tools.map((tools, i) => (
                  <Description key={i} onClick={() => Search(tools)} >{tools}</Description>
                ))
              ) : " "}
            </ContainerDescription>
          </Container>
        ))
      }
    </>
  );
}

export default Jobs;