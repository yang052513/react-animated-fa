import React from 'react'

interface Props {
  iconUrl: string
  link: string
}

export const Icon: React.FC<Props> = ({ iconUrl, link }) => {
  return (
    <a className="social-media-icon" href={link}>
      <i className={iconUrl}></i>
    </a>
  )
}
