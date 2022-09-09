import React from 'react'
import { Link } from 'gatsby'

function Main() {
  return (
    <>
    <nav className="gnb">
      <ul>
        <li><a href="https://twitch.tv/padaseoul" target="_blank" rel="noreferrer">Twitch</a></li>
        <li><a href="https://twitter.com/PadaSeoul" target="_blank" rel="noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com/padaseoul" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><Link to="/discord">Discord</Link></li>
        <li><a href="https://twitch.tv/padaseoul" target="_blank" rel="noreferrer">Twitch</a></li>
        {/* <li><a href="https://forms.gle/cXy2MpRTt2N29mvY9" target="_blank" rel="noreferrer">대관문의</a></li> */}
      </ul>
    </nav>
    </>
  )
}

export default Main