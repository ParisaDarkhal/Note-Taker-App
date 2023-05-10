# Note Taker

Note Taker is a simple note-taking application coded in JavaScript, utilizing Node.js and npm libraries such as Express, bodyParser, and path. It provides users with the ability to write, save, and delete notes, allowing them to organize their thoughts and keep track of tasks.

---

## Usage

To run the Note Taker application, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone the repository to your local machine.
3. Open a command line interface and navigate to the project's directory.
4. Install the required npm packages by running the command `npm install`.
5. Start the local server by running the command `node server.js`.
6. Access the application in your browser by entering `http://localhost:3001`.

---

## Features

The Note Taker application provides the following features:

- **Landing Page**: Upon accessing the application, the landing page is displayed. Clicking on the "Get Started" button loads the note-taking page.
- **Note-Taking Page**: The note-taking page consists of two main columns. The left-hand column displays existing notes, while the right-hand column contains empty fields to enter a new note's title and text.
- **Adding a New Note**: By clicking on the note title field, it gets activated, allowing the user to enter a note title. The user can then enter the note's text in the designated field. After entering the note, a "Save" button appears, allowing the user to save the note.
- **Viewing Existing Notes**: Saved notes are displayed in the left-hand column. By clicking on an existing note, the corresponding title and body of the note are shown in the right-hand column.
- **Deleting a Note**: Users can delete a note by clicking on the bin 🗑️ button next to the note in the left-hand column.

---

## Mockup:

![Demo-1](./public/assets/images/demo-1.png)

![Demo-2](./public/assets/images/demo-2.png)

---

## Deployment

The Note Taker application is deployed on Heroku and can be accessed using the following address: [Note Taker](https://note-taker-client-side-server.herokuapp.com/).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Credits

This application was developed by Parisa Darkhal as an assignment for Bootcamp.
