""" this script handles the user related processes.
    (auth, user details, etc..)
"""
from rest_framework import parsers, renderers
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import AuthTokenSerializer


class Login(APIView):
    """ user authentication endpoint.
        uses token authentication method
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    parser_classes = (parsers.FormParser, parsers.MultiPartParser,
                      parsers.JSONParser)
    render_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer

    def post(self, request):
        """ accepts post data that contains user credentials
            and validates it. Returns a generated token.
        """
        serializer = self.serializer_class(
            data=request.data, request=request)
        serializer.is_valid(raise_exception=True)

        return Response({
            'token': serializer.get_token().key,
            'user_id': serializer.user.id
        }, status=200)
