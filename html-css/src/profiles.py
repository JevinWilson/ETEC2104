import tornado.web
import json
import base64

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

# class Handler
class IndexHandler(tornado.web.RequestHandler):
    # gets the username entered at the back of the URL
    def get(self, username):
        global currentUsername
        # find user in accounts dict
        if username in accounts:
            currentUsername = username
            image = accounts[username]['pic']
            realName = accounts[username]['real_name']
            dob = accounts[username]['DOB']
            email = accounts[username]['email']

            self.render('../html/profiles.html',
                        image = image,
                        username = username,
                        name = realName,
                        dateOfBirth = dob,
                        email = email)
        else:
            self.write("<h1>User not found</h1>")

    def post(self):
        global currentUsername
        if currentUsername is not None:
            
            username = currentUsername

            J = json.loads(self.request.body)

            if J['realName'] != "":
                accounts[username]['real_name'] = J["realName"]

            if J['birthDate'] != "":
                accounts[username]['DOB'] = J["birthDate"]

            if J['email'] != "":
                accounts[username]['email'] = J["email"]

            if J['pic'] != "":
                accounts[username]['pic'] = J["pic"]

            resp={"ok": True}
            self.write(json.dumps(resp))
        else:
            self.write("<h1>Invalid Request</h1>")