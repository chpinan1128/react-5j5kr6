import React from 'react';
import styled, { withTheme } from 'styled-components';

const Others = () => (
  <>
    <StyledDiv1>Default Size 24px</StyledDiv1>
    <StyledDiv2>Default Size 18px</StyledDiv2>
    <StyledDiv3>Default Size 12px</StyledDiv3>
    <StyledDiv4>Default Size 9px</StyledDiv4>
  </>
)

export default withTheme(Others);

const StyledDiv1 = styled.div`
  ${({ theme }) => {
    return `
    font-size: ${theme.size1}px;
  `
  }}
`
const StyledDiv2 = styled.div`
  ${({ theme }) => {
    return `
    font-size: ${theme.size2}px;
  `
  }}
`
const StyledDiv3 = styled.div`
  ${({ theme }) => {
    return `
    font-size: ${theme.size3}px;
  `
  }}
`
const StyledDiv4 = styled.div`
  ${({ theme }) => {
    return `
    font-size: ${theme.size4}px;
  `
  }}
`