import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const guests = [
  // { name: "Alice", rsvp: true },
  // { name: "Bob", rsvp: false },
  // { name: "Charlie", rsvp: true }
];

const guestList = guests.map((guest, index) => (
  <li key={index}>
    {guest.name} - {guest.rsvp ? '✅ Attending' : '❌ Not attending'}
  </li>
))

const filteredGuests = guests.filter((guest) => guest.rsvp === true)

const filteredGuestsList = filteredGuests.map((guest, index) => (
  <li key={index}>
    {guest.name} - {guest.rsvp ? '✅ Attending' : '❌ Not attending'}
  </li>
))

  return (
    <>
      <h1>{guests.length > 0 ? 'Guest List:' : 'You have no friends :('}</h1>
      <h3>Total number of guests: {guests.length}</h3>
      <ul>{guests.length > 0 ? guestList : <p>You're almost as lonely as Akon</p>}</ul>

      <h1>{filteredGuests.length > 0 ? 'RSVPs:' : "Nobody RSVP'd "}</h1>
      <h3>Number of RSVPs: {filteredGuests.length}</h3>
      <ul>{filteredGuests.length > 0 ? filteredGuestsList : <p>Are they even going to show up?</p>}</ul>
    </>
  )
}

export default App
