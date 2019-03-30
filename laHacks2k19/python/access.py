import requests
import json
import ast
from constants import *

def retrieve():

	r = requests.get("https://us-central1-vision-migration.cloudfunctions.net/la_hacks_2019?market_code={}".format(AUS))
	data = json.loads(r.text)
	print(data['buckets'][0]['report']['publisher']['traffic']['totalTraffic'])

#retrieve()




def getTotalConsumption(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

		buckets = data['buckets']

		counter = 0
		for b in buckets:
			counter += b['report']['publisher']['traffic']['totalTraffic']

	print(counter)

getTotalConsumption('us.json')
getTotalConsumption('uk.json')
getTotalConsumption('aus.json')