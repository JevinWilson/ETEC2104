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
        RouletteWebSocketHandler.broadcast(message)

    @classmethod
    def broadcast(cls, message):
        for browser in activeBrowsers:
            browser.write_message(message)
