import discord
import os

from utils import functions

from discord.ext import commands

config = functions.fetch("utils/cfg.json")

def prefix(bot, message):

    if not message.guild:
        return "w!"

    try:
        prefix = bot.cache[message.guild.id]["Prefix"]
    except:
        return "w!"

    if prefix:
        return prefix
    else:
        prefix = "w!"
        return prefix

bot = commands.AutoShardedBot(command_prefix = prefix)
bot.remove_command('help')
functions.boot()
bot.cache = {}

@bot.event
async def on_ready():
    print(f'\nSuccessfully logged in as: {bot.user.name}\nVersion: {discord.__version__}')
    activeServers = bot.guilds
    sum = 0
    for s in activeServers:
        sum += len(s.members)
    people = format(sum, ",")
    watch = discord.Activity(type=discord.ActivityType.watching, name=f"{people} people | w!help")
    await bot.change_presence(activity=watch)


dirs = ["Auto Moderation", "Commands", "Core"]

for directory in dirs:
    for file in os.listdir(f"cogs/{directory}"):
        if file.endswith(".py") and file != "Caching.py":
            bot.load_extension(f"cogs.{directory}.{file[:-3]}")

bot.load_extension("utils.errorhandler")
bot.load_extension("utils.functions")
bot.load_extension("TopGG")
bot.run(config.token, reconnect=True)
