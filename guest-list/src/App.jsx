import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const guests = [
  { name: "Alice", rsvp: true },
  { name: "Bob", rsvp: false },
  { name: "Charlie", rsvp: true }
];

const guestList = guests.map((guest, index) => (
  <li key={index}>
    {guest.name} - {guest.rsvp ? '✅ Attending' : '❌ Not attending'}
  </li>
))

  return (
    <>
      <h1>{guests.length > 0 ? 'Guest List:' : 'You have no friends :('}</h1>
      <h3>Number of guests: {guests.length}</h3>
      <ul>{guests.length > 0 ? guestList : <p>Feels bad</p>}</ul>
    </>
  )
}

export default App
