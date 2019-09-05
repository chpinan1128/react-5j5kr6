import styled from 'styled-components'

export const MenuItem = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		font-size: ${theme.fontSize}px;
	`};
`;