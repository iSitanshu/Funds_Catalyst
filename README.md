# 💼 Funds Catalyst

**Funds Catalyst** is a professional consultancy platform helping NGOs, Corporates, and Trusts with **Compliance, CSR Funding, Project Proposal Writing, and Government Tender Support**.  
It includes a **frontend website** for clients and an **admin dashboard** for managing blogs, subscribers, and consultancy requests.

---

## 🌐 Live Links

- 🖥️ **Frontend:** [https://funds-catalyst.vercel.app](https://funds-catalyst.vercel.app)
- ⚙️ **Admin Panel:** [https://funds-catalyst-gdsv.vercel.app](https://funds-catalyst-gdsv.vercel.app)

---

## 🚀 Features

### 🌍 Frontend
- 🏠 **Home Page:** Professional heading, services overview, and CTA buttons.  
- 🏢 **About Us:** Overview of consultancy, expertise, and trust-building stats.  
- 🧾 **Services:** NGO registration, CSR consultancy, fundraising, DPR writing, tender support.  
- 🏛️ **Government Tenders:** Interactive state dropdown and tender listings.  
- 📊 **Impact Metrics:** Counters showing achievements (700+ NGOs supported, ₹100Cr+ funding).  
- 📚 **Case Studies:** Real-life examples of successful NGO projects.  
- ⭐ **Why Choose Us:** Key differentiators and strengths.  
- 📝 **Blogs:** SEO-friendly posts rendered from admin dashboard.  
- 💬 **Testimonials & Partners:** Client reviews and partner logos.  
- 📅 **Book Consultancy Form:** Direct booking form for consultancy requests.  
- 🔐 **Login / Signup:** Secure authentication for users.

---

### ⚙️ Admin Panel
- 📊 **Dashboard Overview:**
  - Total Subscribers  
  - Published Blogs  
  - Consultancy Bookings  
  - Recent Subscribers & Blog Posts

- 📰 **Blog Management:**
  - Create, edit, and delete blogs.  
  - Add titles, short & long descriptions, and images.

- 📧 **Newsletter:**
  - View all subscriber emails.  
  - Send emails to all subscribers via **Nodemailer**.

- 📆 **Consultancy Management:**
  - View all booking requests.  
  - Mark consultations as *Done* or *Pending*.

- 🌐 **Network Updates:**
  - Add updates with description for news & announcements.

---

## 🖼️ Screenshots

### 🔹 Frontend Page
Showcase your landing page design and brand identity.
| Home Page | Service Us |
|------------|-----------|
| ![Home Page](./images/LandingPage.jpg) | ![Service Page](./images/Services.jpg) |

| Blogs | Consultancy |
|--------|---------------|
| ![Blogs](./images/Blogs.jpg) | ![Consultancy](./images/Consultancy.jpg) |

---

### ⚙️ Admin Dashboard
Show the main dashboard and its sections for management.
| Dashboard Overview | Blog Management |
|---------------------|-----------------|
| ![Admin Dashboard](./images/Dashboard.jpg) | ![Blog Management](./images/Management.jpg) |

| Newsletter | Consultancy Management |
|-------------|------------------------|
| ![Newsletter](./images/Newsletter.jpg) | ![Network Management](./images/Network.jpg) |

---



## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, TailwindCSS, Shadcn/UI |
| **Backend** | Node.js, Express |
| **Database** | Prisma ORM + Neon PostgreSQL |
| **Email** | Nodemailer |
| **File Storage** | Cloudinary |
| **Deployment** | Vercel |
| **Package Manager** | npm |

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/funds-catalyst.git
cd funds-catalyst
```

### 2. Install Dependencies
For both frontend and admin directories:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in each project directory with the following content:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/funds_catalyst"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASS="your_password"
NEXTAUTH_SECRET="your_secret_key"
```

### 4. Setup Prisma
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run Development Servers
**Frontend**
```bash
npm run dev
```

**Admin**
```bash
npm run dev
```

---

## 📞 Contact

For any inquiries or support, please contact us at [Sitanshumishra18@gmail.com](mailto:your-email@example.com).