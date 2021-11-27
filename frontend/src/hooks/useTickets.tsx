import {useState} from 'react'

export const useTickets = () => {
  const [ticket, setTicket] = useState(0)

  const getTicket = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/ticket-window/${id}`)
      const data = await response.json()

      setTicket(data.tickets)

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const buyTicket = async (id: string, tickets: number) => {
    try {
      if (tickets > 0) {
        const response = await fetch(`http://localhost:5000/ticket-window/${id}`, {
          method: 'PUT',
          body: JSON.stringify({tickets}),
          headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }
      } else {
        throw new Error('Tickets can`t be below 0')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const addTicket = async (id: string, tickets: number) => {
    try {
      const response = await fetch(`http://localhost:5000/ticket-window/${id}`, {
        method: 'PUT',
        body: JSON.stringify({tickets}),
        headers: {'Content-Type': 'application/json'}
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return {buyTicket, ticket, getTicket, addTicket}
}