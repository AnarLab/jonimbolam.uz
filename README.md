# Monorepo: frontend + backend

Запуск из корня:

```bash
docker compose up --build
```

## Сервисы

- Внешняя точка входа (nginx): `http://localhost:8080/` (порт настраивается переменной `NGINX_PORT`)
  - Frontend (Next.js): `http://localhost:8080/`
  - Backend (Django):
    - Админка: `http://localhost:8080/admin/`
    - API: `http://localhost:8080/api/`
    - Sitemap: `http://localhost:8080/sitemap.xml`

## Структура

- `frontend/` — Next.js
- `backend/` — Django
- `nginx/` — конфигурация reverse-proxy
