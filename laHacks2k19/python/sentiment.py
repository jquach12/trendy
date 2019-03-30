from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
from constants import USA, UK, AUS, ARTICLES

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

    return titles



def print_sentiment_scores(region):
    with open(region, 'r') as dataFile:
        data = json.load(dataFile)

        print(data)


    titles = getAllTitles()
    analyzer = SentimentIntensityAnalyzer()
    for title in titles:
        sentiment_score = analyzer.polarity_scores(title)
        #print("{:-<40} {}".format(title, str(sentiment_score)))

print(getMostFrequentTitles('../data/article_us.json'))



