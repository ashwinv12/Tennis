from bs4 import BeautifulSoup
from urllib import urlretrieve
from urllib2 import urlopen
from urllib2 import urlparse
import os, errno, json, shutil

BASE_URL = "http://www.chicagoreader.com"

def get_category_links(section_url):
    html = urlopen(section_url).read()
    soup = BeautifulSoup(html, "lxml")

    # for row in t:
        # print(row)


    
def get_date(category_url):
    html = urlopen(category_url).read()
    soup = BeautifulSoup(html, "lxml")
    date = soup.find(class_="wisfb_scheduleGroupTitle").get_text().strip()
    return date

def get_games(category_url):
    html = urlopen(category_url).read()
    soup = BeautifulSoup(html, "lxml")
    allgames = []
    date = soup.find(class_="wisfb_scheduleGroupTitle").get_text().strip()
    games = soup.find_all(class_="wisfb_scheduleGroupTitle")[1].find_all_previous(class_="wisfb_gameDetails")

    for x in games:
    	game = {}
    	team1 = x.find_all(class_="wisfb_teamInfo")[0]
    	team2 = x.find_all(class_="wisfb_teamInfo")[1]
    # .find_all(class_="wisfb_teamInfo")
    # return games
    	g = team1.find_all("a")[0]
    	name = g.find("div").find_all("span")[0].get_text().strip()
        if name == 'Los Angeles':
            surname = g.find("div").find_all("span")[1].get_text().strip()
            if surname == 'Lakers':
                name = 'LA Lakers'
            else:
                name = 'LA Clippers'
    	# print(name)

    	g2 = team2.find_all("a")[1]
    	name2 = g2.find("div").find_all("span")[0].get_text().strip()
        if name2 == 'Los Angeles':
            surname2 = g.find("div").find_all("span")[1].get_text().strip()
            if surname2 == 'Lakers':
                name2 = 'LA Lakers'
            else:
                name2 = 'LA Clippers'
    	# print(name2)

    	game["teamaname"] = name
    	game["teambname"] = name2

    	allgames.append(game)

    return allgames
    
    

# write the data to filename as pretty-printed JSON
def write_to_JSON(data, filename):
    # os.remove(filename) # clear old version
    f = open(filename, "w")
    f.write(json.dumps(data, sort_keys=False, indent=2, separators=(',', ': ')))
    f.close()

print(get_category_links('http://tennislink.usta.com/Tournaments/TournamentHome/Tournament.aspx?T=134538'))


# currentgames = get_games('http://msn.foxsports.com/nba/schedule')
# write_to_JSON(currentgames, "games.json")
# date = get_date('http://msn.foxsports.com/nba/schedule')

# write_to_JSON(date, "currentDate.json")
# write_to_JSON(data, "list.json")
# print(games)

