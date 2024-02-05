import tornado.websocket

class handler(tornado.websocket.WebSocketHandler):
    async def open(self):
        print("OPEN")
        pass

    async def on_message(self, msg):
        print("MESSAGE")
        pass

    async def on_close(self):
        print("CLOSED")
        pass

    def check_origin(self, *args):
        return True
    