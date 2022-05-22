import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentSec = styled.div`
	padding: 60px 0;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2)),
	url('/images/content/contentbg.svg');
	@media screen and (max-width: 768px) {
		padding: 30px 0;
	}
`;

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;

	@media screen and (max-width: 768px) {
		padding-bottom: 5px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 55px;
	border: none;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'pink')};
	cursor: pointer;
	color: indigo;

	&:hover {
		color: chartreuse; 
		background: linear-gradient(219deg, darkgoldenrod 40%, seagreen 80%);
		box-shadow: 0 0 32px 4px lightpink;
		transition: box-shadow 0.3s ease-in;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	justify-content: center;
	box-shadow: 0 0 32px 4px lightskyblue;
	border-radius: 1rem;
	position: relative;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'red')};
	&:before {
		width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background-image: url('./images/projects-bg.png');
		border-top-left-radius: 15px;
		border-bottom-right-radius: 15px;
		background-size: 100% auto;
		object-fit: cover;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 1.3rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin: 1rem 0;
	color: palegreen;
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	height: 300px;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: cornflowerblue;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? 'lightseagreen' : 'lightseagreen')};
`;
