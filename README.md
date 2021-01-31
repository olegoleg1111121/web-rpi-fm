# 📻 web-rpi-fm
Web interface for Raspberry Pi fm transmitter. Made using Vue.js and Python.

<p align="center">
 <img src="/static/img/preview.png" width="70%">
</p>

[PiFmRds] on GitHub


### Installation
1. Get the latest [release]
2. Run install.sh file
```sh
$ sudo bash install.sh
```
3. Run terminal and start the server
```sh
$ cd web-rpi-fm
$ python server.py
```
4. Open the browser and type your RPi address with 9000 port
```sh
For example
192.168.0.108:9000
```

### Manual installation
```sh
$ sudo apt-get install sox libsox-fmt-all libsox-fmt-mp3
$ pip install flask flask_uploads flask_cors tinytag
```

If the music does not play you must change some permissions
```sh
$ chmod 777 pifmrds
$ cd static/audio
$ chmod 777 pifmrds
```
### Todos
 - Add more functionalities
 - Fix bugs and UX
 - Spotify Connect
 - Add more internet radio stations
 
 ### Licence
 MIT

web-rpi-fm is in the alpha phase, some functions may not work.
I am not responsible for damages caused by using the application.

 [PiFmRds]: <https://github.com/ChristopheJacquet/PiFmRds>
 [release]: <https://github.com/dawiddydlinski/web-rpi-fm/releases>
