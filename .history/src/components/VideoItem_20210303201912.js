import './VideoItem.css'
import React from 'react'

export default function VideoItem({video}) {
  return (
    <div className="item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
