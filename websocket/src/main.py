import asyncio
import os, os.path
import tornado.web
import websocket


HTMLDIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..","html"
    )
)

def makeApp():
    endpoints=[
        # dont forget to add indexs here.
    ]
    app = tornado.web.Application(
        endpoints,
        static_path=HTMLDIR
    )
    app.listen(8000)
    print("Server started on port 8000")
    return app

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("<a href='/static/roulette.html'>Welcom</a>")

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()

# test test