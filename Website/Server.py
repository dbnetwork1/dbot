from flask import Flask, request, render_template, redirect, url_for
from flask_discord import DiscordOAuth2Session
import datetime
import asyncio
import aiohttp
import json
import os

app = Flask(__name__, template_folder='templates')
app.secret_key = b""
app.config["DISCORD_CLIENT_ID"] = 123 # Discord client ID.
app.config["DISCORD_CLIENT_SECRET"] = ""  # Discord client secret.
app.config["DISCORD_REDIRECT_URI"] = ""  # Redirect URI.

discord = DiscordOAuth2Session(app)
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
loop = asyncio.get_event_loop()

def Log(error):
    errorfile = open("Error.log", "a")
    errorfile.write("[{}]: {} \n".format(datetime.datetime.utcnow().strftime("%d/%m/%Y at %H:%M:%S (System Time)"), error))
    errorfile.close()

@app.errorhandler(Exception)
def handle_exception(e):
    original = getattr(e, "original_exception", None)

    if not original:
        original = "Error 500"

    Log(original)


    errorbox = """
                <script>
                    alert("Something broke. Retreating")
                    window.location.href = "/";
                </script>
                """

    return errorbox

async def GetMutualGuilds():
    guild_ids = ""

    guilds = discord.fetch_guilds()

    for i in guilds:
        if (i.permissions_value & 0x20) == 0x20:
            guild_ids += str(i.id) + " "

    async with aiohttp.ClientSession() as session:
        payload = {
            'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
            "SessionGuilds": guild_ids
        }
        async with session.post('API URL', headers=payload) as resp:
            if resp.status == 200:
                resp = await resp.json()

            return resp

async def GetAutoModSettings(id):
    async with aiohttp.ClientSession() as session:
        payload = {
            'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
            "GetAutoModSettings": id
        }
        async with session.post('API /get', headers=payload) as resp:
            if resp.status == 200:
                resp = await resp.json()

            return resp

async def GetRules(guild):
    async with aiohttp.ClientSession() as session:
        payload = {
            'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
            "GetRules": guild
        }
        async with session.post('API /get', headers=payload) as resp:
            if resp.status == 200:
                resp = await resp.json()

            return resp

async def getChannels(id):

    url = f"https://discord.com/api/guilds/{id}/channels"

    async with aiohttp.ClientSession() as session:
        payload = {
            f"Authorization": "Bot YOUR_BOT_TOKEN"
        }
        async with session.get(url, headers=payload) as resp:
            r = await resp.json()

        channels = {}
        for i in r:
            if i["type"] == 0:
                channels[i["id"]] = i["name"]

        return channels

async def getRoles(id):

    url = f"https://discord.com/api/guilds/{id}/roles"

    async with aiohttp.ClientSession() as session:
        payload = {
            f"Authorization": "Bot YOUR_BOT_TOKEN"
        }
        async with session.get(url, headers=payload) as resp:
            r = await resp.json()

        roles = {}
        for i in r:

            if not i["name"] == "@everyone":
                roles[i["id"]] = i["name"]

        return roles

async def getMainSettings(id):
    async with aiohttp.ClientSession() as session:
        payload = {
            'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
            "GetGuildSettings": id
        }
        async with session.post('API /get', headers=payload) as resp:
            if resp.status == 200:
                resp = await resp.json()

            return resp
        return False

async def getLogs(id):
    async with aiohttp.ClientSession() as session:
        payload = {
            'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
            "GetLoggingPage": id
        }
        async with session.post('API /get', headers=payload) as resp:
            if resp.status == 200:
                resp = await resp.json()

            return resp

async def Update(type, guild, setting, tochange):

    # Type: Core Settings
    # Guild: Guild ID
    # Setting: What to change it to
    # ToChange: Language / Prefix / Channel


    data = {
        'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
        f"{type}": f"{guild}",
        f"{tochange}": f"{setting}"
    }
    async with aiohttp.ClientSession() as session:
        async with session.post('API /post', headers=data) as resp:
            return resp

async def AddRule(guild, type, infractions, length, increment):
    data = {
        'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
        "AddRule": f"{guild}",
        "Type": f"{type}",
        "Infractions": f"{infractions}",
        "Length": f"{length}",
        "Increment": f"{increment}"
    }
    async with aiohttp.ClientSession() as session:
        async with session.post('API /post', headers=data) as resp:
            return resp

async def DeleteRule(guild, rule):
    data = {
        'Token': '^5oY7i$68qpC*&Z41hvTU5Q$b8MxfLUrJYRGM^hEoEb1y0CeOaPIprFqS2$F1B6uJ*1lybh%xEiboeh4QCoNqE!lGM0kcFaqQr^',
        "DeleteRule": f"{guild}",
        "Rule": f"{rule}"
    }
    async with aiohttp.ClientSession() as session:
        async with session.post('API /post', headers=data) as resp:
            return resp

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        if not discord.authorized:
            return render_template("index.html", loginURL='/login/', discord=discord)

        user = discord.fetch_user()

        return render_template("index.html", discord=discord, user=user)

@app.route("/login/")
def login():
    return discord.create_session()

@app.route("/callback/")
def callback():
    discord.callback()
    return redirect(url_for("index"))

# Pages

@app.route("/moderation/")
def moderation():
    if discord.authorized:
        user = discord.fetch_user()
        return render_template("moderation.html", discord=discord, user=user)

    return render_template("moderation.html", discord=discord)

@app.route("/permissions/")
def permissions():
    if discord.authorized:
        user = discord.fetch_user()

        return render_template("permissions.html", discord=discord, user=user)

    return render_template("permissions.html", discord=discord)

@app.route("/commands/")
def commands():
    if discord.authorized:
        user = discord.fetch_user()
        return render_template("commands.html", discord=discord, user=user)

    return render_template("commands.html", discord=discord)

@app.route("/settings/")
def settings():
    if discord.authorized:
        user = discord.fetch_user()
        return render_template("settings.html", discord=discord, user=user)

    return render_template("settings.html", discord=discord)

    # Pages That Require Session

@app.route("/dashboard/")
def ServerBrowser():
    if not discord.authorized:
        return redirect(url_for("index"))

    guilds = discord.fetch_guilds()
    user = discord.fetch_user()

    mutual = {}
    unmutual = {}

    botguilds = loop.run_until_complete(GetMutualGuilds())

    for i in botguilds["Mutual"]:
        for guild in guilds:
            if str(guild.id) == i:
                if guild.icon_url == None:
                    icon_url = "No Guild Icon URL"
                else:
                    icon_url = guild.icon_url

                mutual[str(guild.id)] = {"Name": guild.name, "Avatar": icon_url}

    for i in botguilds["NotMutual"]:
        for guild in guilds:
            if str(guild.id) == i:
                if guild.icon_url == None:
                    icon_url = "No Guild Icon Url"
                else:
                    icon_url = guild.icon_url

                unmutual[str(guild.id)] = {"Name": guild.name, "Avatar": icon_url}

    return render_template("serverbrowser.html", discord=discord, user=user, mutual=mutual, unmutual=unmutual)

@app.route("/dashboard/<id>/", methods=['GET', 'POST'])
def guildSpecificDash(id):
    if not discord.authorized:
        return redirect(url_for("index"))

    user = discord.fetch_user()
    guilds = discord.fetch_guilds()

    if request.method == 'POST':
        if 'LanguageSelection' in request.form:
            loop.run_until_complete(Update("CoreSettings", id, request.form['LanguageSelection'], "Language"))

        if 'PrefixChoice' in request.form:
            loop.run_until_complete(Update("CoreSettings", id, request.form['PrefixChoice'], "Prefix"))

    for i in guilds:
        if int(id) == i.id:
            if not (i.permissions_value & 0x20) == 0x20:
                return redirect(url_for("index"))

            gName = i.name

            Channels = loop.run_until_complete(getChannels(id))

            settings = loop.run_until_complete(getMainSettings(id))
            Prefix = settings[0]
            LanguageID = settings[1]

            Languages = {1: "English", 2: "Spanish", 3: "German", 5: "Dutch"}

            if LanguageID in Languages:
                Language = Languages[LanguageID]
                del Languages[LanguageID]

            return render_template("dashboard.html", discord=discord, user=user, Guild=gName, Prefix=Prefix, Language=Language, AvailableLanguages=Languages, Channels=Channels, Page="Modules")

@app.route("/dashboard/<id>/moderator", methods=['GET', 'POST'])
def Moderator(id):
    if not discord.authorized:
        return redirect(url_for("index"))

    user = discord.fetch_user()
    guilds = discord.fetch_guilds()

    Updates = {1: 'SimilarWords', 2: "Mentions", 3: 'Capitals', 4: 'Emojis', 5: 'Invites', 6: 'Joins', 7: 'Swearing', 8: 'Spam', 9: 'Files', 10: 'Spoilers'}
    EnabledPosts = {1: 'SimilarWordsEnabled', 2: 'MentionsEnabled', 3: 'CapitalsEnabled', 4: 'EmojisEnabled', 5: 'InvitesEnabled', 6: 'JoinsEnabled', 7: 'SwearingEnabled', 8: 'SpamEnabled', 9: 'FilesEnabled', 10: 'SpoilersEnabled'}
    IgnoredPosts = {1: 'SimilarWordsIgnored', 2: 'MentionsIgnored', 3: 'CapitalsIgnored', 4: 'EmojisIgnored', 5: 'InvitesIgnored', 7: 'SwearingIgnored', 8: 'SpamIgnored', 9: 'FilesIgnored', 10: 'SpoilersIgnored'}
    RatelimitPosts = {1: 'SimilarWordsRatelimit', 2: 'MentionsRatelimit', 3: 'CapitalsRatelimit', 4: 'EmojisRatelimit', 5: 'InvitesRatelimit', 8: 'SpamRatelimit', 10: 'SpoilersRatelimit'}

    if request.method == 'POST':

        for i in request.form:
            data = request.form.to_dict(flat=False)

            if i.endswith("Enabled"):
                for j in EnabledPosts:
                    if EnabledPosts[j] == i:

                        ToUpdate = Updates[j]

                        loop.run_until_complete(Update(ToUpdate, id, data[i][0], "Enabled"))

            if i.endswith("Ignored"):
                for j in IgnoredPosts:
                    if IgnoredPosts[j] == i:
                        ToSend = ""
                        for k in data[i]:
                            ToSend += f"{k} "

                        ToUpdate = Updates[j]

                        loop.run_until_complete(Update(ToUpdate, id, ToSend, "Ignored"))

            if i.endswith("Ratelimit"):
                for j in RatelimitPosts:
                    if RatelimitPosts[j] == i:
                        if request.form[i] != '':

                            ToUpdate = Updates[j]

                            loop.run_until_complete(Update(ToUpdate, id, request.form[i], "Ratelimit"))

        if 'ChannelSelection' in request.form:
            loop.run_until_complete(Update("CoreSettings", id, request.form['ChannelSelection'], "Channel"))

        if 'Type' in request.form and 'Infractions' in request.form and 'Length' in request.form and 'Increment' in request.form: # If its add rule form
            loop.run_until_complete(AddRule(id, request.form['Type'], request.form['Infractions'], request.form['Length'], request.form['Increment']))

        if 'RuleToDelete' in request.form:
            loop.run_until_complete(DeleteRule(id, request.form['RuleToDelete']))

        if 'IgnoredRoles' in request.form:
            print(request.form)
            ToSend = ""
            for k in data[i]:
                ToSend += f"{k} "

            print(ToSend)

            loop.run_until_complete(Update("CoreSettings", id, ToSend, "IgnoredRoles"))

    Channels = loop.run_until_complete(getChannels(id))
    Roles = loop.run_until_complete(getRoles(id))
    AllSettings = loop.run_until_complete(GetAutoModSettings(id))
    Rules = loop.run_until_complete(GetRules(id))

    GeneralSettings = loop.run_until_complete(getMainSettings(id))
    LoggingChannel = GeneralSettings[2]

    Settings = {
        "IgnoredRoles": {

        },
        "LoggingChannel": {
            "Channel": ""
        },
        "SimilarWords": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Mentions": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Capitals": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Emojis": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Invites": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Joins": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Swearing": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Spam": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Files": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            },
        },
        "Spoilers": {
            "Enabled": 0,
            "Ratelimit": None,
            "Ignored": {
            }
        }
    }

    Types = {1: "SimilarWords", 2: "Mentions", 3: "Capitals", 4: "Emojis", 5: "Invites", 6: "Joins", 7: "Swearing", 8: "Spam", 9: "Files", 10: "Spoilers"}

    Settings["LoggingChannel"]["Channel"] = "Choose Channel"

    for i in AllSettings:
        for j in Types:
            if i[0] == j:
                Settings[Types[j]]["Enabled"] = i[1]
                Settings[Types[j]]["Ratelimit"] = i[2]
                if i[3]:
                    IgnoredChannels = i[3].split()

                    for i in IgnoredChannels:
                        if i in Channels:
                            Settings[Types[j]]["Ignored"][i] = Channels[i]

        if GeneralSettings[3]:
            ModRoles = GeneralSettings[3].split()
            for j in ModRoles:
                if j in Roles:
                    Settings["IgnoredRoles"][j] = Roles[j]

        if GeneralSettings[4]:
            IgnoredRoles = GeneralSettings[4].split()
            for j in IgnoredRoles:
                if j in Roles:
                    if j not in Settings["IgnoredRoles"]:
                        Settings["IgnoredRoles"][j] = Roles[j]

    if LoggingChannel in Channels:
        Settings["LoggingChannel"]["Channel"] = Channels[LoggingChannel]

    for i in guilds:
        if int(id) == i.id:
            if not (i.permissions_value & 0x20) == 0x20:
                return redirect(url_for("index"))

            return render_template("dashboard.html", discord=discord, user=user, id=id, Channels=Channels, Roles=Roles, Settings=Settings, Rules=Rules, Page="Moderator")

@app.route("/dashboard/<id>/logs")
def logs(id):
    if not discord.authorized:
        return redirect(url_for("index"))

    user = discord.fetch_user()
    guilds = discord.fetch_guilds()

    logs = loop.run_until_complete(getLogs(id))

    logs = json.loads(logs)

    for i in guilds:
        if int(id) == i.id:
            if not (i.permissions_value & 0x20) == 0x20:
                return redirect(url_for("index"))

            gName = i.name
            return render_template("dashboard.html", discord=discord, user=user, id=id, Guild=gName, Logs=logs, Page="Logs")

@app.route("/dashboard/<id>/settings", methods=['GET', 'POST'])
def dashsettings(id):
    if not discord.authorized:
        return redirect(url_for("index"))

    if request.method == 'POST':
        if 'LanguageSelection' in request.form:
            loop.run_until_complete(Update("CoreSettings", id, request.form['LanguageSelection'], "Language"))

        if 'PrefixChoice' in request.form:
            loop.run_until_complete(Update("CoreSettings", id, request.form['PrefixChoice'], "Prefix"))

    user = discord.fetch_user()
    guilds = discord.fetch_guilds()

    GeneralSettings = loop.run_until_complete(getMainSettings(id))

    Prefix = GeneralSettings[0]
    LanguageID = GeneralSettings[1]

    Languages = {1: "English", 2: "Spanish", 3: "German", 5: "Dutch"}

    if LanguageID in Languages:
        Language = Languages[LanguageID]
        del Languages[LanguageID]

    for i in guilds:
        if int(id) == i.id:
            if not (i.permissions_value & 0x20) == 0x20:
                return redirect(url_for("index"))

            return render_template("dashboard.html", discord=discord, user=user, id=id,  AvailableLanguages=Languages, Prefix=Prefix, Language=Language, Page="Settings")

@app.route("/logout/")
def logout():
    if discord.authorized == True:
        discord.revoke()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run()