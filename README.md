# Tacnique_assesment_Hemant
Setup and Run Instructions
Clone or download this repository.

Use any static file server (e.g., Live Server extension in VS Code) to run the project:

Open index.ftl in your editor.

Right-click and choose “Open with Live Server”.

Ensure data.js and style.css are properly linked and in the correct folder structure:

.
├── index.ftl
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── app.js


 Project Structure Overview

 ├── index.ftl          # Main UI template for employee dashboard
├── css/
│   └── style.css      # All styling for layout and responsiveness
├── js/
│   ├── data.js        # In-memory mock employee data
│   └── app.js         # JavaScript logic for rendering, sorting, filtering, and CRUD


 Features
Add / Edit / Delete employees via prompt-based modals.

Search by name or email.

Filter by first name, department, and role (sidebar).

Sort by first name or department.

Fully responsive layout for mobile, tablet, and desktop.


Reflection
Challenges Faced:
Integrating all operations (add/edit/delete/search/filter/sort) in a single view without external libraries required careful DOM and data management.

Ensuring smooth pagination and filter updates on the same in-memory dataset was tricky.

What I’d Improve with More Time:
Replace browser prompts with styled modal dialogs for better UX.

Add form validation with better error handling and messaging.

Persist employee data to localStorage or mock backend for session continuity.

Create separate view files for Add/Edit Employee for cleaner architecture.