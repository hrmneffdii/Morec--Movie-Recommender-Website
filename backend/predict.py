# recommendations.py
import pandas as pd
import joblib
import sys

# Load indices and cosine_sim
indices = joblib.load('./data/indices.joblib')
cosine_sim = joblib.load('./data/cosine_sim.joblib')

# Load df2
df2 = pd.read_pickle('./data/df2.pkl')

def get_recommendations(title, indices, cosine_sim, df2):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:4]
    movie_indices = [i[0] for i in sim_scores]
    return df2['title'].iloc[movie_indices]

title = sys.argv[1] 
recommendations = get_recommendations(title, indices, cosine_sim, df2)
print(recommendations.to_list())