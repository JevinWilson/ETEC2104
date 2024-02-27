import asyncio
import os, os.path
import tornado.web


HTMLDIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..","html"
    )
)

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

def makeApp():
    endpoints=[
        # dont forget to add indexs here.
        # runs at localhost:8000/roulette.html
        (r"/", MainHandler), 
        (r"/(roulette\.html)", tornado.web.StaticFileHandler, {'path': HTMLDIR}),
        (r"/(roulette\.js)", tornado.web.StaticFileHandler, {'path': HTMLDIR}),
    ]
    app = tornado.web.Application(
        endpoints,
        static_path=HTMLDIR
    )
    app.listen(8000)
    print("Server started on port 8000")
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()

# test test