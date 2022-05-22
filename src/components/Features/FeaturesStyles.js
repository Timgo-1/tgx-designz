import styled from 'styled-components';

export const FeatureSection = styled.div`
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2)),
	url('/images/content/featuresbg.svg');
	padding: 60px;
	position: relative;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		padding: 30px 0;
	}
`;

export const FeatureTitle = styled.h2`
	color: bisque;
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;

	&:before {
		width: 40px;
		height: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: lime;
		transform: translateX(-50%);
	}
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* flex-wrap: wrap; */
	margin-top: 4rem;
	grid-gap: 4rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.4rem;
		grid-row-gap: 3rem;
		/* grid-gap: 3rem; */
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled.div`
	/* max-width: 33%; */
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 960px) {
		/* max-width: 50%; */
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	&.one {
		background: linear-gradient(130deg, lightcoral 0%, lightcyan 100%);
	}
	&.two {
		background: linear-gradient(220deg, lightblue 0%, magenta 100%);
	}
	&.three {
		background: linear-gradient(130deg, lightyellow 0%, brown 100%);
	}
	&.four {
		background: linear-gradient(130deg, violet 0%, firebrick 100%);
	}
	&.five {
		background: linear-gradient(130deg, indigo 0%, lightyellow 100%);
	}
	&.six {
		background: linear-gradient(130deg, darkslateblue 0%, yellow 100%);
	}

	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	color: lavender;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: moccasin;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
