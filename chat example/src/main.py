import asyncio
import os, os.path
import tornado.web
import sock


HTMLDIR = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "..","html"
    )
)

def makeApp():
    endpoints=[
        # dont forget to add indexs here.
        ("/sock", sock.handler)
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