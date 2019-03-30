import requests
import json
from collections import Counter
from constants import USA, UK, AUS


def printFactoid(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

		buckets = data['buckets']

		counter = 0
		for b in buckets:
			print(b['report']['rollups'][0])

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

	#print(counter)



getTotalConsumption(USA)
getTotalConsumption(UK)
getTotalConsumption(AUS)

def mostToLeastTraffic(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

#printFactoid(USA)

def getMostFrequentTopics(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

		buckets = data['buckets']


		topicCounter = Counter()
		for b in buckets:
			for topic in b['report']['rollups']:
				topicCounter[topic['name']] += topic['traffic']['totalTraffic']
		return topicCounter

print(getMostFrequentTopics(AUS))

def getMostFrequentArticles(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)




