<h1 align="center">
  <br>
  <a href="https://github.com/No1IrishStig/Watchdog_Discord_Bot"><img src="https://cdn.no1irishstig.co.uk/aplb3.png" alt="Watchdog Discord Bot"></a>
</h1>

<h4 align="center">Moderation, Multi Language, Web Dashboard and Somewhat Modular.</h4>

<p align="center">
  <a href="#overview">Overview</a>
  •
  <a href="#installation">Installation</a>
</p>

# Auto Moderation

<p>With Watchdog, moderation will no longer be an issue. With our advanced systems to detect anyone who may cause a nuisance.</p>

Some of our Auto Moderation features include:

<ul>
  <li>Mass Join Detection (Formly known as Raid Prevention)</li>
  <li>Advanced Server Invite Detection</li>
  <li>Repeated Word Detection</li>
  <li>Mass Emojis Detection</li>
  <li>Mass Caps Detection</li>
  <li>Spam Detection</li>
  <li>Manual Moderation</li>
  </ul>

<h5>We know! Manual moderation is required, so we have implemented a few commands that will allow your moderators to take care of rule breakers who may slip through the cracks. </h5>

# Moderation Commands:

<ul>
  <li>Mute</li>
  <li>Warn</li>
  <li>Kick</li>
  <li>Ban</li>
  <li>Clear</li>
 </ul>

# General Commands:

<ul>
  <li>Prefix</li>
  <li>serverinfo (sinfo)</li>
  <li>roleinfo (rinfo)</li>
  <li>userinfo (uinfo)</li>
 </ul>
  
<p>These features provide sexy embedded messages overflowing with information. So please, enjoy them <p>

<p>Watchdog uses a complex caching methods through the use of Databases. Meaning that your information is kept safe, encrypted and backed up at all times. It also allows for quick access, with low memory usage and millions of queries per minute.<p>

[Installation](#installation) is **NOT** easy, and you do need to be advanced within python and sql!

# Installation

Firstly install [Python3.7](https://www.python.org/downloads/) or newer

- [All OS Versions](https://pypi.org/project/discord.py/)

**Create a new discord application, or use an existing one**

- [Discord Developer Portal](https://discordapp.com/developers/applications/)

**You will then need to set up a MySQL Database and connect it through the config file**

- [MySQL Server Setup (Ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)

**If you wish to setup the Dashboard, you will need to run the Rest API which will also connect to the MySQL database. You will need to change ALL HTTP requests to contain your servers IP and url to the gateway**

- [HTTP Assistance](https://docs.aiohttp.org/en/stable/)

If you need any further assistance you can message me on discord - Stig#1337
