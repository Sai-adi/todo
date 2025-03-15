Project Name: Todo List SPA  

Brief Description:  
A simple single-page application (SPA) where users can add, delete, and manage tasks. The app uses LocalStorage to persist tasks and features a responsive UI with Bootstrap.  

Features:  
- Add new tasks  
- Delete tasks  
- Tasks persist using LocalStorage  
- Responsive design with Bootstrap  

Tech Stack:  
Frontend:  
- React.js  
- React Bootstrap  

Styling:  
- Bootstrap 5  
- Custom CSS  

Icons:  
- React Icons  

State Management:  
- useState, useEffect  

Installation and Setup:  

1. Clone the Repository
git clone https://github.com/Sai-adi/todo.git
cd todo


2. Install Dependencies  
npm install
npm install react-bootstrap react-icons


3. Start the Application  
npm start

Project Structure
/src
/components
- TodoForm.js # Handles task input
- TodoList.js # Displays tasks
App.js # Main component
index.js # Entry point

Usage:  
- Add Task: Type a task and click "Add"  
- Delete Task: Click the trash icon  
- Persistence: Tasks are saved automatically in LocalStorage  

Future Enhancements:  
- Mark tasks as completed  
- Use a backend API for data persistence (MongoDB/Firebase)  
- Add animations for task actions  
