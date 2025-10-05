# 📚 Database Migration and Management  
### Transitioning from MySQL to MongoDB for Legacy Applications  

## 🎓 Project Information  

This repository contains the code for the IBM Assignment Project titled  
Database Migration and Management: Transitioning from MySQL to MongoDB for Legacy Applications.  

The project demonstrates a practical approach to migrating a Library Management System built with MySQL to a MongoDB-based solution, while maintaining data integrity and backend functionality.  

---

## 🧩 Features  
- 📖 Full-fledged Library Management System (Books, Authors, Branches, Cards, Lending, etc.)  
- 🗃️ Data Migration Script from MySQL → MongoDB (`migrateData.js`)  
- ⚙️ Modular Node.js + Express backend  
- 🧱 API-based architecture with clean MVC pattern  
- 🎨 Modern React + Tailwind CSS frontend  
- 🔄 Real-time integration between migrated data and new APIs  

---

## 🗂️ Project Structure  
```
DataMigration/
├── Backend/
│   ├── app.js
│   ├── migrateData.js              # Migration logic
│   ├── package.json
│   ├── config/
│   │   ├── config.js
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── Frontend/
│   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/api.js
│   └── package.json
└── Project Phase-3.pdf                # Documentation
```

---

## ⚙️ Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/DataMigration.git
cd DataMigration
```

### 2️⃣ Setup Backend  
```bash
cd Backend
npm install
```

#### Configure Database  
Edit `config/config.js` with your MySQL and MongoDB credentials.

#### Run the Server  
```bash
node app.js
```

---

### 3️⃣ Setup Frontend  
```bash
cd ../Frontend
npm install
npm run dev
```
Visit `http://localhost:5173` to view the app.  

---

## 🧠 Migration Process Overview  

1. Develop a Library Management System using MySQL backend.  
2. Design equivalent MongoDB schemas for all entities (Books, Authors, etc.).  
3. Use the script `migrateData.js` to:
   - Connect to MySQL
   - Fetch existing records
   - Insert them into MongoDB collections  
4. Validate migration by testing CRUD operations in the React UI.

---

## 🧰 Tech Stack  

| Layer | Technology |
|-------|-------------|
| Frontend | React, Tailwind CSS, Vite |
| Backend | Node.js, Express.js |
| Database | MySQL → MongoDB |
| ORM / DB Driver | Sequelize (MySQL), Mongoose (MongoDB) |

---

## 📄 Documentation  
Detailed report available in:  
`Project Doc.pdf`

---

## 🧑‍💻 Contributors  
Developed as part of the IBM SkillsBuild Assignment for  
Bachelor of Engineering in Computer Science and Engineering (CSE) Final Year.  

---
