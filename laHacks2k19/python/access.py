import requests
import json
import ast
from constants import *

def retrieve():

	r = requests.get("https://us-central1-vision-migration.cloudfunctions.net/la_hacks_2019?market_code={}".format(AUS))
	data = json.loads(r.text)
	print(data['buckets'][0]['report']['publisher']['traffic']['totalTraffic'])

#retrieve()

with open('us.json') as ukDataFile:
	data = json.load(ukDataFile)

	print(data['buckets'][1]['report']['publisher']['traffic']['totalTraffic'])