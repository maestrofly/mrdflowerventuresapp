import styled from 'styled-components'
import imgBg from '../../images/cacti.jpg'

export  const HeroContainer = styled.div`
 background: linear-gradient( to right, rgba(0,0,0,0.7),
 rgba(0,0,0,0.1)), 
 url(${imgBg});
 height: 100vh;
 background-position: center;
 background-size: cover
`