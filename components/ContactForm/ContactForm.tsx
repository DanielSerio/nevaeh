import React from 'react';
import { MdSend } from 'react-icons/md';
import FormControl from './FormControl';

export default function ContactForm() {
  return (
    <form className="form">
      <fieldset>
        <legend>Name</legend>
        <FormControl inputId='firstName' labelText='First'>
          <input placeholder="John" type="text" name="firstName" id="firstName" className="input" />
        </FormControl>
        <FormControl inputId='lastName' labelText='Last'>
          <input placeholder="Doe" type="text" name="lastName" id="lastName" className="input" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <FormControl inputId='email' labelText='Email' error="Email is required">
          <input placeholder="johndoe@example.com" type="email" name="email" id="email" className="input" />
        </FormControl>
        <FormControl inputId='phone' labelText='Phone'>
          <input placeholder="1-555-555-5555" type="tel" name="phone" id="phone" className="input" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Misc.</legend>
        <FormControl inputId='company' labelText='Company Name' labelHelper='(Optional)'>
          <input placeholder="John's Place" type="text" name="company" id="company" className="input" />
        </FormControl>
        <FormControl inputId='address' labelText='Address' labelHelper='(Optional)'>
          <input placeholder="123 East St..." type="text" name="address" id="address" className="input" />
        </FormControl>
      </fieldset>
      <fieldset>
        <legend>Content</legend>
        <FormControl inputId='message' labelText="Message">
          <textarea name="message" id="message"></textarea>
        </FormControl>
      </fieldset>
      <button className="btn btn-submit" name="submit" aria-label="submit form">
        <span className="icon">
          <MdSend />
        </span>
        <span className="text">Submit and Send</span>
      </button>
    </form>
  );
}
