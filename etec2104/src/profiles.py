import tornado.web

accounts = {
    "alice": {
        "real_name": "Alice Smith",
        "DOB": "Jan. 1",
        "email": "alice@example.com"
    },
    "bob": {
        "real_name": "Bob Jones",
        "DOB": "Dec. 31",
        "email": "bob@bob.xyz"
    },
    "carol": {
        "real_name": "Carol Ling",
        "DOB": "Jul. 17",
        "email": "carol@example.com"
    },
    "dave": {
        "real_name": "Dave N. Port",
        "DOB": "Mar. 14",
        "email": "dave@dave.dave"
    }
}

# class Handler
class IndexHandler(tornado.web.RequestHandler):
    # gets the username entered at the back of the URL
    def get(self, username):
        # find user in accounts dict
        if username in accounts:
            realName = accounts[username]['real_name']
            dob = accounts[username]['DOB']
            email = accounts[username]['email']

            self.render('../html/profiles.html',
                        username = username,
                        name = realName,
                        dateOfBirth = dob,
                        email = email)
        else:
            self.write("<h1>User not found</h1>")