import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  iconUrl: string
  link: string
  size?: number
  color?: string
  hoveredColor?: string
  layerColor?: string
  margin?: number
  padding?: number
  rounded?: boolean
  bgColor?: string
}

export const Icon: React.FC<Props> = ({
  iconUrl,
  link,
  size,
  color,
  hoveredColor,
  layerColor,
  margin,
  padding,
  rounded,
  bgColor,
}) => {
  //前置图层移动动画
  const scaleAnimation = keyframes`
    0% {
        left: -110%;
        top: 90%;
    }
    /* 10 -30 */
    50% {
        left: 10%;
        top: -30%;
    }

    100% {
        top: -10%;
        left: -10%;
    }
  `

  //图标 font-awesome classname链接
  const Icon = styled.i`
    line-height: ${size ? `${size * 1.6}px` : '50px'};
    font-size: ${size ? `${size}px` : '24px'};
    transition: 0.2s linear;
  `

  //图标容器
  const IconWrap = styled.a`
    text-align: center;
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: ${size ? `${size * 1.6}px` : '50px'};
    height: ${size ? `${size * 1.6}px` : '50px'};
    margin: ${margin ? `${margin}px` : '10px'};
    padding: ${padding ? `${padding}px` : '0px'};
    border-radius: ${rounded ? '50%' : '30%'};
    color: ${color ? color : 'rgb(0, 0, 0)'};
    background: ${bgColor ? bgColor : null};

    /* 图标放大动画 */
    &:hover ${Icon} {
      transform: scale(1.4);
      color: ${hoveredColor ? hoveredColor : 'rgb(255, 255, 255)'};
    }

    /* 图标前置图层移动动画 */
    &::before {
      content: '';
      position: absolute;
      width: 120%;
      height: 120%;
      background: ${layerColor ? layerColor : 'rgb(140, 0, 255)'};
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    &:hover::before {
      animation: ${scaleAnimation} 0.8s 1;
      top: -10%;
      left: -10%;
    }
  `

  return (
    <IconWrap as="a" className="btn" href={link}>
      <Icon className={iconUrl}></Icon>
    </IconWrap>
  )
}
