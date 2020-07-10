import React from 'react'
import {render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('Can fill and submit form', () => {
    render(<ContactForm/>)
    const firstNameInput = screen.getByLabelText(/first name*/i)
    const lastNameInput = screen.getByLabelText(/last name*/i)
    const emailInput = screen.getByLabelText(/email*/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, {target: {value: 'Thomas'}})
    fireEvent.change(lastNameInput, {target: {value: 'Gingerstone'}})
    fireEvent.change(emailInput, {target: {value: 'Tging92@gmail.com'}})
    fireEvent.change(messageInput, {target: {value: 'Foo bar, who came up with that?!!!'}})

    const submitButton = screen.getByText(/submit/i)
    console.log(submitButton)
    fireEvent.click(submitButton)

    const firstName = screen.findByText(/thomas/i)
    expect(firstName).toBeInTheDocument

})