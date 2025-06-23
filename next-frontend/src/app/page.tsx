import React from 'react'

function page() {
  return (
    <main>
      <h1>Welcome to Artistly</h1>
      <p>A platform to connect Event Planners with Performing Artists.</p>
      <a href="/artists">Explore Artists</a>

      <h2>Categories</h2>
      <ul>
        <li>Singers</li>
        <li>Dancers</li>
        <li>Speakers</li>
        <li>DJs</li>
      </ul>
    </main>
  )
}

export default page