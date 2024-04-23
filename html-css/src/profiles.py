import tornado.web
import json

# variables to hold the current username and the accounts dict
currentUsername = None

accounts = {
    "alice": {
        "real_name": "Alice Smith",
        "DOB": "Jan. 1",
        "email": "alice@example.com",
        "pic": "/static/image/alice.png"
    },
    "bob": {
        "real_name": "Bob Jones",
        "DOB": "Dec. 31",
        "email": "bob@bob.xyz",
        "pic": "/static/image/bob.png"
    },
    "carol": {
        "real_name": "Carol Ling",
        "DOB": "Jul. 17",
        "email": "carol@example.com",
        "pic": "/static/image/carol.png"
    },
    "dave": {
        "real_name": "Dave N. Port",
        "DOB": "Mar. 14",
        "email": "dave@dave.dave",
        "pic": "/static/image/dave.png"
    }
}

class IndexHandler(tornado.web.RequestHandler):
    def get(self, username):
        # Create global variable instance
        global currentUsername

        if username in accounts:
            # Get global variable value
            currentUsername = username

            self.render('../html/profiles.html',
                        image = accounts[username]['pic'],
                        userName = username,
                        name = accounts[username]['real_name'],
                        dateOfBirth = accounts[username]['DOB'],
                        email = accounts[username]['email'])
        else:
            self.write("<h1>User not found</h1>")
        
    def post(self):
        # Create global variable instance
        global currentUsername

        if currentUsername is not None:
            # Get global variable value
            username = currentUsername

            J = json.loads(self.request.body)

            # Check for filled responses
            if J['realName'] != "":
                accounts[username]['real_name'] = J["realName"]

            if J['birthDate'] != "":
                accounts[username]['DOB'] = J["birthDate"]

            if J['email'] != "":
                accounts[username]['email'] = J["email"]

            resp={"ok": True}
            self.write(json.dumps(resp))
        else:
            self.write("<h1>Invalid Request!</h1>")