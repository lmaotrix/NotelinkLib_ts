# Notelink TypeScript

A TypeScript library for managing notes, sharing, and collaboration in educational environments.

## Overview

Notelink is a comprehensive note-taking and sharing system designed for educational institutions. It provides functionality for creating, managing, and sharing notes between users, with support for courses, institutions, and collaborative features like likes and public sharing.

## Features

- 📝 **Note Management**: Create, delete, and manage personal notes
- 🔄 **Note Sharing**: Share notes publicly and access shared notes from other users
- 👍 **Like System**: Like and interact with shared notes
- 🏫 **Educational Focus**: Built-in support for courses and institutions
- 👥 **User Management**: Handle users with institutional affiliations
- 🔒 **Privacy Controls**: Toggle notes between private and public visibility

## Project Structure

```
src/
├── Interfaces/           # TypeScript interfaces
│   ├── IMyNotesManager.ts
│   ├── INoteLinkManager.ts
│   └── IsharedNotesManager.ts
├── Managers/            # Business logic managers
│   ├── MyNotesManager.ts
│   ├── SharedNotesManager.ts
│   └── noteLinkManager.ts
└── Models/              # Data models
    ├── Notes.ts
    ├── Users.ts
    ├── courses.ts
    ├── institutions.ts
    └── likes.ts
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Notelink_ts
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Creating and Managing Notes

```typescript
import { MyNotesManager } from './src/Managers/MyNotesManager';
import { User } from './src/Models/Users';

// Create a notes manager
const notesManager = new MyNotesManager();

// Create a new note
const note = notesManager.createNote(
  "My Study Notes",           // title
  "Important concepts...",    // text content
  "",                        // file attachment (optional)
  false,                     // isPublic
  1,                         // courseId
  1                          // userId
);

// Get all notes
const allNotes = notesManager.getNotes();

// Toggle note visibility
notesManager.isPubblicNote(note);

// Delete a note
notesManager.deleteNote(note.noteId);
```

### Sharing Notes

```typescript
import { SharedNotesManager } from './src/Managers/SharedNotesManager';

const sharedManager = new SharedNotesManager();

// Get all public notes from a collection
const publicNotes = sharedManager.getSharedNotes(allNotes);

// Like a note
sharedManager.likedNote(noteId, userId, true);

// Get all likes on notes
const likes = sharedManager.getLikesOnNote();
```

### Working with Models

```typescript
import { Note } from './src/Models/Notes';
import { User } from './src/Models/Users';
import { Course } from './src/Models/courses';

// Create a user
const user = new User(
  "John",           // firstName
  "Doe",            // lastName
  "john@email.com", // email
  1,                // institutionId
  1                 // userId
);

// Create a course
const course = new Course("Mathematics", 1, 1);

// Notes are typically created through the NotesManager
// but can be instantiated directly
const note = new Note(
  "Calculus Notes",
  "Derivatives and integrals...",
  "",
  true,  // public
  course.courseId,
  1,     // noteId
  user.userId
);
```

## API Reference

### MyNotesManager

| Method | Description |
|--------|-------------|
| `createNote(title, text, file, isPublic, courseId, userId)` | Creates a new note |
| `deleteNote(noteId)` | Deletes a note by ID |
| `getNotes()` | Returns all notes |
| `isPubblicNote(note)` | Toggles note public/private status |

### SharedNotesManager

| Method | Description |
|--------|-------------|
| `getSharedNotes(allNotes)` | Filters and returns public notes |
| `likedNote(noteId, userId, liked)` | Sets like status for a note |
| `getLikesOnNote()` | Returns all likes |
| `getNoteLikes(noteId)` | Gets likes for a specific note |

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Building

This project uses TypeScript. To compile:

```bash
npx tsc
```

## Testing

The project includes comprehensive Jest tests covering:

- Note creation and management
- Note deletion
- Public/private note toggling
- Shared notes functionality
- Like system

All tests are located in the `tests/` directory.

## Dependencies

- **@mantlebee/ts-core**: Core utilities for TypeScript projects
- **TypeScript**: Type-safe JavaScript
- **Jest**: Testing framework
- **ts-jest**: TypeScript support for Jest

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

ISC License

## Architecture Notes

This library follows object-oriented principles with:

- **Separation of Concerns**: Models, Managers, and Interfaces are clearly separated
- **Interface-Driven Design**: All managers implement TypeScript interfaces
- **Encapsulation**: Private fields with getter methods for controlled access
- **Educational Domain**: Built specifically for academic note-taking scenarios

The project is designed to be framework-agnostic and can be integrated into web applications, mobile apps, or used as a standalone Node.js library.
