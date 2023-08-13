from django.http import JsonResponse


def test(request):
    data = {"ok": "ok"}
    return JsonResponse(data)
