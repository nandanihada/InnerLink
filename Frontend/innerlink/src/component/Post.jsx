import React from 'react'
import "../styles/post.css";
function post() {
  return (
    <>
      <div class="card">
  <p>Write here</p>
</div>
<svg class="filter">
  <filter id="wavy2">
    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
  </filter>
</svg>

    </>
  )
}

export default post
