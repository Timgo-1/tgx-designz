import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	background: linear-gradient(to bottom right, lightskyblue, lavenderblush);
	padding: clamp(50px, 30vh, 100px) 0;
	border-radius: 30px;
	width: 100%;
`;

export const FormTitle = styled.h1`
	margin-bottom: 4rem;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: navy;
	text-align: center;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	padding: 0 15px;
	flex: 1;
	max-width: 70%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	max-width: 540px;
	padding-top: 0;
	width: 100%;
`;

export const FormButton = styled.button`
	
	width: 100%;
	margin-top: 2rem;
	height: 4rem;
	font-size: 22px;
	font-weight: 700;
	letter-spacing: 0.75px;
	text-transform: uppercase;
	border-radius: 28px;
	line-height: 30px;
	box-shadow: 10px 16px 40px 0 pink;
	text-align: center;
	border: none;
	color: greenyellow;
	background-color: indigo;
	cursor: pointer;

	&:hover {
		color: yellow;
		background-color: purple;
		transition: background-color 0.4s ease-in;
	}
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 2rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: pink;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	font-size: 1rem;
	border-bottom: 1px solid gray;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: darkgreen;
`;
