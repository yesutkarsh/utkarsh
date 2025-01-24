import React from 'react'
import MeetingJoinCard from './MeeCard'

export default function page() {
  return (
   <>
   <div className='flex flex-col items-center  h-screen'>

   <MeetingJoinCard
   title="Team Meeting"
   timeLeft={60*60}
   zoomLink="https://us06web.zoom.us/j/88680163745"
   description="Project Discussion"
   />
   </div>
   </>
  )
}
