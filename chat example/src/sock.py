import tornado.websocket

activeClients = []

class handler(tornado.websocket.WebSocketHandler):
    async def open(self):
        print("OPEN")
        for c in activeClients:
            await c.write_message("Someone entered the chat")
        activeClients.append(self)

    async def on_message(self, msg):
        print("MESSAGE")
        for c in activeClients:
            await c.write_message(msg)

    def on_close(self):
        print("CLOSED")
        for i in range(len(activeClients)):
            if activeClients[i] == self:
                del activeClients[i]
                break

        for c in activeClients:
            c.write_message("Someone left the chat")

    def check_origin(self, *args):
        return True
    