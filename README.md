# 🧲 Lead Generation System with Node.js & n8n

## 📌 Overview

This project is a full-stack lead capture system that:
- Collects leads from a frontend form.
- Stores the data in the backend (Node.js).
- Sends real-time notifications via email using n8n workflow automation.

---

## 🚀 Tech Stack

- **Frontend**: HTML/CSS/JS or React (based on your setup)
- **Backend**: Node.js + Express
- **Automation**: n8n (open-source workflow automation tool)
- **Email**: SMTP via Gmail

---

## 📂 Folder Structure (Backend)

backend/
├── index.js
├── .env
├── routes/
│ └── leads.js

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/lead-gen-node-n8n.git
cd lead-gen-node-n8n/backend
Install dependencies

bash
Copy
Edit
npm install
Configure .env

env
Copy
Edit
PORT=5000
N8N_WEBHOOK_URL=http://localhost:5678/webhook/lead-capture
Run the backend

bash
Copy
Edit
node index.js
Start n8n

bash
Copy
Edit
n8n
Make sure n8n is accessible at http://localhost:5678.



