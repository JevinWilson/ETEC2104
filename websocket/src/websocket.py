import tornado.websocket

activeBrowsers = []

class RouletteWebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        activeBrowsers.append(self)
        print("WebSocket opened")

    def on_close(self):
        activeBrowsers.remove(self)
        print("WebSocket closed")

    def on_message(self, message):
        # Broadcast the message to all connected clients
        for socket in activeBrowsers:
            if socket != self:
                socket.write_message(message)
