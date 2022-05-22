import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: linear-gradient(to top left, mistyrose, moccasin);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	width: clamp(400px, 90vw, 800px);
	height: 90vh;
	box-shadow: 0 5px 16px lightblue;
	background: burlywood;
	color: violet;
	display: flex;
	position: relative;
	overflow: scroll;
	border-radius: 10px;
	z-index: 100;
`;

export const CloseModalButton = styled(MdClose)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;
