from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
from constants import USA, UK, AUS, ARTICLES
import numpy as np
import matplotlib.pyplot as plt

def getAllTitles():
    titles = []
    for art in ARTICLES:
        for k, v in art.items():
            if not v:
                continue
            titles.append(v)
    return titles

# arbitrarily gets the top 100 
def getMostFrequentTitles(jsonFile, cap=100):
    titles = []
    frequentArticles = set()
    with open(jsonFile, 'r') as dataFile:
        data = json.load(dataFile)
        for k, _ in data.items():
            frequentArticles.add(k)
            if len(frequentArticles) > cap:
                break

        for art in ARTICLES:
            for k, v in art.items():
                if k in frequentArticles:
                    titles.append(v)

    print(titles)
    return titles


def getTitleSentiments(region):
  
    titleSentiments = []

    titles = None
    print(region)
    if region == UK:
        titles = getMostFrequentTitles('../data/article_uk.json')
    elif region == AUS:
        titles = getMostFrequentTitles('../data/article_aus.json')
    else:
        titles = getMostFrequentTitles('../data/article_us.json')

    analyzer = SentimentIntensityAnalyzer()
    for title in titles:
        sentiment_score = analyzer.polarity_scores(title)
        #print("{:-<40} {}".format(title, str(sentiment_score)))
        titleSentiments.append((title,str(sentiment_score)))

    return titleSentiments


def plotTitleSentiment(region):

    a = getTitleSentiments(region)

    print(a)

plotTitleSentiment(USA)


