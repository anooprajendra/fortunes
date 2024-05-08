import os
import subprocess

from fastapi import FastAPI

from fastapi import BackgroundTasks
from fastapi import Request

# from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/js", StaticFiles(directory="static/js"), name="js")
app.mount("/css", StaticFiles(directory="static/css"), name="css")


@app.get("/")
async def index():
    return FileResponse("static/index.html", media_type="html")


@app.get("/fortune")
async def fortune(short=True, off=False):
    fortune_proc = ["/usr/bin/fortune"]
    if off:
        fortune_proc.append("-o")
    s = subprocess.run(fortune_proc, stdout=subprocess.PIPE, text=True)
    f = s.stdout

    return {"fortune": f}
