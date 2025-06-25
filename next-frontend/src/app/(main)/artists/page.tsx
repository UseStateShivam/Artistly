'use client' // Indicates this is a client component

import OurServices from '@/components/our-services' // Import the OurServices component
import React from 'react'

// Page component for the artists route
function page() {
  return (
    // Main content area with top padding
    <main className='pt-32'>
      {/* Render the OurServices component */}
      <OurServices/>
    </main>
  )
}

export default page // Export the page component as default