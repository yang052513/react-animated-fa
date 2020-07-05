import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  iconUrl: string
  link: string
}

export const App: React.FC<Props> = ({ iconUrl, link }) => {
  const scaleAnimation = keyframes`
    0% {
        left: -110%;
        top: 90%;
    }

    50% {
        left: 10%;
        top: -30%;
    }

    100% {
        top: -10%;
        left: -10%;
    }
  `
  const IconWrap = styled.a`
    text-align: center;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #f1f1f1;
    margin: 10px;
    border-radius: 30%;
    color: #000000;
    overflow: hidden;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 120%;
      height: 120%;
      background: #3da3f4;
      transform: rotate(45deg);
      left: -110%;
      top: 90%;
    }
    &:hover::before {
      animation: ${scaleAnimation} 0.7s 1;
      top: -10%;
      left: -10%;
    }
  `

  const Icon = styled.i`
    line-height: 50px;
    font-size: 24px;
    transition: 0.2s linear;
    &:hover {
      transform: scale(1.3);
      color: #f1f1f1;
    }
  `

  return (
    <IconWrap as="a" className="social-media-icon" href={link}>
      <Icon className={iconUrl}></Icon>
    </IconWrap>
  )
}
