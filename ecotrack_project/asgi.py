"""
ASGI config for ecotrack_project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecotrack_project.settings')

application = get_asgi_application()
