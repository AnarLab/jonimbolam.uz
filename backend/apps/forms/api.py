from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from .services import send_telegram_message


class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=64, required=False, allow_blank=True)
    email = serializers.EmailField(required=False, allow_blank=True)
    message = serializers.CharField(required=False, allow_blank=True)


class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        text = "\n".join(
            [
                "Новая заявка с сайта:",
                f"Имя: {data.get('name')}",
                f"Телефон: {data.get('phone') or '-'}",
                f"Email: {data.get('email') or '-'}",
                f"Сообщение: {data.get('message') or '-'}",
            ]
        )
        send_telegram_message(text)
        return Response({"ok": True})

