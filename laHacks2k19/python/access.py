import requests
import json
import pprint
from collections import Counter
from constants import USA, UK, AUS, HOT_TOPICS_USA, HOT_TOPICS_UK, HOT_TOPICS_AUS


def printFactoid(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

		buckets = data["buckets"]

		counter = 0
		for b in buckets:
			print(b["report"]["rollups"][0])

def retrieve():
	r = requests.get("https://us-central1-vision-migration.cloudfunctions.net/la_hacks_2019?market_code={}".format(AUS))
	data = json.loads(r.text)
	print(data["buckets"][0]["report"]["publisher"]["traffic"]["totalTraffic"])

#retrieve()


def getTotalConsumption(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)

		buckets = data["buckets"]

		counter = 0
		for b in buckets:
			counter += b["report"]["publisher"]["traffic"]["totalTraffic"]

	#print(counter)

def getMostFrequentTopics(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)
		buckets = data["buckets"]
		
		topicCounter = Counter()
		for b in buckets:
			for topic in b["report"]["rollups"]:
				topicCounter[topic["name"]] += topic["traffic"]["totalTraffic"]
		return topicCounter

#print(getMostFrequentTopics(AUS))

def getMostFrequentArticles(jsonFile):
	with open(jsonFile) as dataFile:
		data = json.load(dataFile)
		buckets = data["buckets"]

		articleCounter = Counter()
		for b in buckets:
			for topic in b["report"]["rollups"]:
				for article in topic["top_articles_on_network"]:
					for k, _ in article.items():
						articleCounter[k] += 1


		return articleCounter

#print(getMostFrequentArticles(AUS))

def getAllArticles():
	articles = []

	for region in [USA, UK, AUS]:
		with open(region) as dataFile:
			data = json.load(dataFile)
			buckets = data["buckets"]
			for b in buckets:
				for topic in b["report"]["rollups"]:
					for article in topic["top_articles_on_network"]:
						if article not in articles:
							articles.append(article)

	return articles

#getAllArticles()

def getArticlesForName(region, hotTopic):
	frontArticles = []

	with open(region) as dataFile:
		data = json.load(dataFile)
		buckets = data["buckets"]
 
		for b in buckets:
			for topic in b["report"]["rollups"]:
				if topic["name"] in hotTopic.keys():
					print(topic["name"])

					for art in topic["top_articles_on_network"]:
						for k, _ in art.items():

							someD = dict()
							someD[topic["name"]] = k
							frontArticles.append(someD)

	res = dict()
	for a in frontArticles:
		for k, v in a.items():
			if k not in res:
				res[k] = [v]
			else:
				res[k].append(v)

				res[k] = list(set(res[k]))
	return res

#b = getArticlesForName(UK,HOT_TOPICS_UK)


def getArticlesForCategory(region, category):
	categoryArticles = []

	with open(region) as dataFile:
		data = json.load(dataFile)
		buckets = data["buckets"]

		for b in buckets:
			for topic in b["report"]["rollups"]:
				if topic['category'] == category:
					for article in topic["top_articles_on_network"]:
						for k, _ in article.items():
							categoryArticles.append(k)

	return {category : categoryArticles}

print(getArticlesForCategory(USA, 'unknown'))

def getAllArticleTitlePairs():
	articles = dict()
	for region in [USA, UK, AUS]:
		with open(region) as dataFile:
			data = json.load(dataFile)
			buckets = data["buckets"]
			for b in buckets:
				for topic in b["report"]["rollups"]:
					for article in topic["top_articles_on_network"]:
						for k, v in article.items():
							articles[k] = v

	print(articles)

	return articles

# getAllArticleTitlePairs()