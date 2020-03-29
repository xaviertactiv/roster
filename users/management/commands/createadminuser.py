from django.apps import apps
from django.conf import settings
from django.contrib.auth.management.commands import createsuperuser

from .terminal import Style



class Command(createsuperuser.Command):

    data = dict()
    _model = apps.get_model(settings.AUTH_USER_MODEL)

    def handle(self, *args, **options):
        # remove the default success message
        options.update({'verbosity': 0})
        super(Command, self).handle(*args, **options)

        # set the user as a client or contractor
        while True:
            raw_value = input("[1] Client  [2] Contractor\nType: ")
            if raw_value:
                break
            self.stderr.write("Error: This field cannot be blank.")

        {
            '1': self.create_client,
            '2': self.create_contractor
        }[raw_value]()

        self.stdout.write(f"{Style.CYAN}{Style.BOLD}Superuser created successfully.")

    def create_client(self):
        try:
            email = self.data.get('email')
            self._model.objects.create_client(email)
        except Exception as e:
            self.stdeer.write(e)

    def create_contractor(self):
        try:
            email = self.data.get('email')
            self._model.objects.create_contractor(email)
        except Exception as e:
            self.stderr.write(e)

    def get_input_data(self, field, message, default=None):

        value = super(Command, self).get_input_data(field, message, default=None)
        self.data.update({field.name: value})

        return value