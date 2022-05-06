import { useState, FormEvent } from 'react'
import { CMS_URL } from '../consts'

const INITIAL_VALUES = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [formValues, setFormValues] = useState(INITIAL_VALUES)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await fetch(`${CMS_URL}/api/messages`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        data: {
          ...formValues,
        },
      }),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      setMessage(errorResponse.error.message)
    }

    setMessage('Message was sent!')
    setFormValues(INITIAL_VALUES)
  }

  return (
    <div>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            value={formValues.name}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                name: event.target.value,
              }))
            }
            type="text"
            id="name"
            name="name"
            required
            className="block"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="block"
            value={formValues.email}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                email: event.target.value,
              }))
            }
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea
          value={formValues.message}
            onChange={(event) =>
              setFormValues((currentState) => ({
                ...currentState,
                message: event.target.value,
              }))
            }
            id="message"
            name="message"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  )
}
