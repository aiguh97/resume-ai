# Resume Builder AI Backend

Backend service untuk **Resume Builder AI** yang menyediakan REST API untuk generate, edit, dan manage CV secara otomatis menggunakan AI. Aplikasi ini sudah **di-containerize dengan Docker** dan **di-deploy ke Kubernetes**, serta terintegrasi penuh dengan **CI/CD pipeline**.

---

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: NestJS / Express
- **AI Engine**: OpenAI API / LLM Provider
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **API Docs**: Swagger (OpenAPI)
- **CI/CD**: GitHub Actions
- **Container**: Docker
- **Orchestration**: Kubernetes
- **Deployment**: Cloud / VPS (AWS, GCP, Azure)

---

## 📁 Project Structure

```
resume-builder-ai-backend/
├── src/
│   ├── auth/
│   ├── users/
│   ├── resumes/
│   ├── ai/
│   ├── common/
│   └── main.ts
├── prisma/
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
├── .github/workflows/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Salin file `.env.example` menjadi `.env`:

```env
APP_NAME=resume-builder-ai-backend
APP_PORT=3000
NODE_ENV=production

DATABASE_URL=
JWT_SECRET=
JWT_EXPIRES_IN=1d

OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
```

---

## ▶️ Running Project

### Local Development

```bash
npm install
npm run start:dev
```

### Dengan Docker

```bash
docker build -t resume-builder-ai-backend .
docker run -p 3000:3000 resume-builder-ai-backend
```

---

## ☸️ Kubernetes Deployment

Folder `k8s/` berisi konfigurasi Kubernetes:

```bash
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

Cek status deployment:

```bash
kubectl get pods
kubectl get svc
```

---

## 🔁 CI/CD Pipeline

Pipeline otomatis berjalan setiap:

- Push ke branch `main`
- Pull Request

### Flow CI/CD

1. Install dependencies
2. Run test & lint
3. Build aplikasi
4. Build & push Docker image
5. Deploy ke Kubernetes cluster

---

## 🤖 AI Features

- Generate resume otomatis dari input user
- Optimasi deskripsi pekerjaan
- Penyesuaian CV berdasarkan job title
- Multi-language resume
- ATS-friendly formatting

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/register` | Register user |

### Resume

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/resumes/generate` | Generate resume dengan AI |
| GET | `/api/resumes` | List resume user |
| GET | `/api/resumes/:id` | Detail resume |
| PUT | `/api/resumes/:id` | Update resume |
| DELETE | `/api/resumes/:id` | Delete resume |

### Example Response

```json
{
  "success": true,
  "data": {
    "resumeId": "uuid",
    "content": "Generated resume content"
  }
}
```

---

## 🧪 Testing

```bash
npm run test
```

---

## 📸 Screenshots

### Swagger API Docs

![Swagger](screenshots/swagger.png)

### CI/CD Pipeline

![CI/CD](screenshots/cicd.png)

### Kubernetes Pods

![K8s](screenshots/kubernetes.png)

---

## 📄 API Documentation

- Swagger UI: `/api/docs`

---

## 🛡️ Security

- JWT Authentication
- Input validation
- Rate limiting
- Helmet & CORS

---

## 📜 License

MIT License © 2026

---

## 👤 Author

**Your Name**  
Backend Engineer