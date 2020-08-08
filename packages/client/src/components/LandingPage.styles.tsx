import styled from "@emotion/styled";
import { keyframes } from '@emotion/core';
import { Flex } from "@chakra-ui/core";
import color from 'util/color';
import Color from 'color';

const gradient = keyframes`
	0% {
		background-position: 20% 50%;
	}
	50% {
		background-position: 80% 50%;
	}
	100% {
		background-position: 20% 50%;
	}
`;

/* background: linear-gradient(-45deg, #12c2e9, #c471ed, #f64f59); */
export const CoolBackground = styled(Flex)`
	height: 100%;
	width: 100%;
	background: ${`linear-gradient(-45deg, ${color.sabrinaSecondary}, ${color.sabrinaPrimary}, ${color.josephPrimary}, ${color.josephSecondary})`};
	background-size: 400% 400%;
	animation: ${gradient} 16s ease infinite;
`;

export const CoolAngledSlash = styled(Flex)`
	position: absolute;
	background: ${`linear-gradient(to right, ${color.josephPrimary} 0%,${color.josephPrimary} 50%,${color.sabrinaPrimary} 50%,${color.sabrinaPrimary} 100%)`};
	padding: 6px;
	transform: rotate(45deg);
	border-radius: 12px;
`;

export const CoolJosephHorizontal = styled(Flex)`
	width:100%;
	border-top: 6px solid ${color.josephPrimary};
	border-top-right-radius: 6px; 
`;

export const CoolSabrinaHorizontal = styled(Flex)`
	width:100%;
	border-bottom: 6px solid ${color.sabrinaPrimary};
	border-bottom-left-radius: 6px; 
`;

export const NameButton = styled(Flex)`
	transition: 0.3s ease;
	cursor: pointer;
	&:hover{
		transform: scale(1.2);
	}
`;