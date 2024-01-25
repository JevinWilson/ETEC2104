import asyncio
import os, os.path
import tornado.web
import profiles

HTMLDIR = os.path.abspath(
    os.path.join(os.path.dirname(__file__),
                 "..","html"
    )
)

def makeApp():
    endpoints=[
        # ex: localhost:8000/profile/alice
        (r"/profile/(.*)",profiles.IndexHandler) 
    ]
    
    app = tornado.web.Application(endpoints,
        static_path=HTMLDIR)
    
    app.listen(8000)
    print("Server running at http://localhost:8000")
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()