class UserTypeMiddleware(object):
    """ define the user type and assign the
        user type object to the auth user.
    """
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        return response