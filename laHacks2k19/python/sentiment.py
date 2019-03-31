from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import json
from constants import USA, UK, AUS, ARTICLES
import numpy as np
import matplotlib.pyplot as plt
import ast
def getAllTitles():
    titles = []
    for art in ARTICLES:
        for k, v in art.items():
            if not v:
                continue
            titles.append(v)
    return titles

# arbitrarily gets the top 1000 
def getMostFrequentTitles(jsonFile, cap=1500):
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
                if not v:
                    continue
                if k in frequentArticles:
                    titles.append(v)

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

    print(titleSentiments)
    return titleSentiments


def getBins(region):
    scores = []
    for ts in getTitleSentiments(region):
        scores.append(ast.literal_eval(ts[1])['compound'])

    bins = {-1: [], -0.5: [], 0: [], 0.5: []}

    for s in scores:
        if s >= 0.5:
            bins[0.5].append(s)
        elif s >= 0:
            bins[0].append(s)
        elif s >= -0.5:
            bins[-0.5].append(s)
        else:
            bins[-1].append(s)
    return bins


def plotTitleSentiment():
    bins_usa = getBins(USA)
    bins_uk = getBins(UK)
    bins_aus = getBins(AUS)
  
    # data to plot
    n_groups = 4

    us_bar = (len(bins_usa[-1]), len(bins_usa[-0.5]), len(bins_usa[0]), len(bins_usa[0.5]))
    uk_bar = (len(bins_uk[-1]), len(bins_uk[-0.5]), len(bins_uk[0]), len(bins_uk[0.5]))
    aus_bar = (len(bins_aus[-1]), len(bins_aus[-0.5]), len(bins_aus[0]), len(bins_aus[0.5]))
     
    # create plot
    fig, ax = plt.subplots()
    index = np.arange(n_groups)
    bar_width = 0.25
    opacity = 0.8
     
    rects1 = plt.bar(index, us_bar, bar_width,
    alpha=opacity,
    color='r',
    label='US')
     
    rects2 = plt.bar(index + bar_width, uk_bar, bar_width,
    alpha=opacity,
    color='b',
    label='UK')

    rects3 = plt.bar(index + bar_width + bar_width, aus_bar, bar_width,
    alpha=opacity,
    color='g',
    label='AUS')
     
    plt.xlabel('Sentiment')
    plt.ylabel('Amount of Articles')
    plt.title('Article Title Sentiment Across Regions')
    plt.xticks(index + bar_width, ('Very Negative', 'Slightly Negative', 'Slightly Positive', 'Very Positive'))
    plt.legend()
     
    plt.tight_layout()


    plt.show()

plotTitleSentiment()


