import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lobster Two', cursive;
}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;

	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Section = styled.div`
	padding: 160px 0;
`;

export const Heading = styled.div`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	font-size: 3rem;
	text-align: center;
	line-height: 1.1;
	font-weight: 600;
	background: url('/images/projects.png');
	background-position: center;
	background-size: auto;
	background-repeat: no-repeat;
	color: ${({ lightText }) => (lightText ? 'bisque' : 'bisque')};
`;

export default GlobalStyle;
