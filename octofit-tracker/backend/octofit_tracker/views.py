from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer
from .models import User, Team, Activity, Leaderboard, Workout
from django.http import JsonResponse

def api_root(request, format=None):
    return JsonResponse({
        'users': 'https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/users/',
        'teams': 'https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/teams/',
        'activities': 'https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/activities/',
        'leaderboard': 'https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/leaderboard/',
        'workouts': 'https://probable-potato-q4g9xwq9gjh9765-8000.app.github.dev/api/workouts/'
    })

@api_view(['GET'])
def get_leaderboard_structure(request):
    from django.db import connection
    with connection.cursor() as cursor:
        cursor.execute("PRAGMA table_info(leaderboard)")
        columns = cursor.fetchall()
    return JsonResponse({
        'columns': columns
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer