import tornado.web
import json
import base64

class Handler(tornado.web.RequestHandler):
    def post(self):
        J=json.loads(self.request.body)
        realName = J["realName"]
        dob = J["birthDate"]
        profilePic = J.get("profilePic")
        if profilePic:
            ppic = base64.b64decode(profilePic)
            print("WE GOT:",realName,dob,ppic[:20])
        else:
            print("no profile pic")
        resp={"ok": True}
        self.write( json.dumps(resp) )