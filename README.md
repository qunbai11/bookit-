# BookIt – Study room booking demo

This is a small web prototype for COMP2850.

## Features

- Select a date and time slot.
- View a list of available rooms.
- Choose a room and fill in a booking form (name + student ID).
- See a confirmation message after submitting the form.

Basic accessibility features:

- Semantic `<button>` elements instead of clickable `<div>`s.
- Text error messages associated with inputs and announced via `aria-live`.
- Logical DOM reading order (header → filters → rooms → form → footer).

## How to run

Simply open `index.html` in a web browser.
