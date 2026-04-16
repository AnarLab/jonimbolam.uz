# Backend (Django)

Запуск из корня репозитория:

```bash
docker compose up --build
```

После старта:
- Админка: `http://localhost:8000/admin/`
- API: `http://localhost:8000/api/`
- Sitemap: `http://localhost:8000/sitemap.xml`

Переменные окружения (compose):
- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DATABASE_URL`
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
