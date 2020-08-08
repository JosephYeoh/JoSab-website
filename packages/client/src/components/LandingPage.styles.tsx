import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Flex, Icon, Text } from '@chakra-ui/core';
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

const animate = keyframes`
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}
	100%{
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
`;

const draw = (isSabrina?:boolean) => keyframes`
	0%{
		stroke-dasharray: 55 490;
		stroke-dashoffset: -220;
    stroke-width: 6px;
	}
	30%{
		stroke-dasharray: 550;
    stroke-dashoffset: 0;
    stroke-width: 4px;
	}
	35%{
		fill: transparent;
	}
	100% {
		fill: ${isSabrina ? color.sabrinaPrimary : color.josephPrimary};
		stroke-dasharray: 550;
    stroke-dashoffset: 0;
    stroke-width: 4px;
		stroke: transparent;
  }
`;

const changeColor = (isSabrina?:boolean) => keyframes`
	0%{
		color: ${isSabrina ? color.sabrinaPrimary : color.josephPrimary};
	}
	30%{
		color: ${isSabrina ? color.sabrinaPrimary : color.josephPrimary};
	}
	100%{
		color: ${isSabrina? color.josephPrimary : color.sabrinaPrimary};
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
  width: 100%;
  border-top: 6px solid ${color.josephPrimary};
  border-top-right-radius: 6px;
`;

export const CoolSabrinaHorizontal = styled(Flex)`
  width: 100%;
  border-bottom: 6px solid ${color.sabrinaPrimary};
  border-bottom-left-radius: 6px;
`;

export const NameButton = styled(Flex)`
  cursor: pointer;
`;

export const NameIcon = styled(Icon)`
	transition: 0.6s ease;
	z-index: 100;
`;

export const NameText = styled(Text)`
	transition: 0.6s ease;
	z-index: 100;
`;

export const CoolUL = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CoolLI = styled.li<{ left: string; size: number; delay: string; duration: string }>`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animate} 25s linear infinite;
  bottom: -150px;

  left: ${(props) => props.left};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
`;


export const CoolRect = styled.rect<{isSabrina?: boolean}>`
	position: absolute;
	fill: transparent;
  stroke-dasharray: 55 490;
	stroke-dashoffset: -220;
  stroke-width: 6px;
  stroke: ${props => props.isSabrina ? color.sabrinaPrimary : color.josephPrimary};
	transform-origin: center center;
	transform: ${props => props.isSabrina ? `rotate(180deg)` : 'rotate(0deg)'};
`;


export const CoolSVGWrapper = styled.div<{isSabrina?: boolean}>`
	display: flex;
	align-items: center;
	cursor:pointer;
	padding: 20px;
  width: 320px;
	&:hover{
		${CoolRect}{
			-webkit-animation: 0.8s ${props => draw(props.isSabrina)} ease forwards;
			animation: 0.8s ${props => draw(props.isSabrina)} ease forwards;
		}
		${NameText} {
			-webkit-animation: 0.8s ${props => changeColor(props.isSabrina)} ease forwards;
			animation: 0.6s ${props => changeColor(props.isSabrina)} ease forwards;
		}
		${NameIcon} {
			-webkit-animation: 0.8s ${props => changeColor(props.isSabrina)} ease forwards;
			animation: 0.8s ${props => changeColor(props.isSabrina)} ease forwards;
		}
	}
`;

