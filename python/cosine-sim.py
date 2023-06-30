import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from string import punctuation
from collections import Counter
import math

import sys

def cosine_similarity(text1, text2):
    # Tokenize the texts
    tokens1 = word_tokenize(text1.lower())
    tokens2 = word_tokenize(text2.lower())

    # Remove stopwords and punctuation
    stop_words = set(stopwords.words('english') + list(punctuation))
    tokens1 = [word for word in tokens1 if word not in stop_words]
    tokens2 = [word for word in tokens2 if word not in stop_words]

    # Create word frequency vectors for both texts
    word_freq1 = Counter(tokens1)
    word_freq2 = Counter(tokens2)

    # Compute the dot product
    dot_product = 0
    for word in word_freq1:
        if word in word_freq2:
            dot_product += word_freq1[word] * word_freq2[word]

    # Compute the magnitude of the vectors
    magnitude1 = math.sqrt(sum([freq**2 for freq in word_freq1.values()]))
    magnitude2 = math.sqrt(sum([freq**2 for freq in word_freq2.values()]))

    # Compute the cosine similarity
    if not magnitude1 or not magnitude2:
        return 0.0
    else:
        return dot_product / (magnitude1 * magnitude2)

# Example usage
text1 = "The quick brown fox jumps over the lazy dog"
text2 = "The lazy dog is jumped over by the quick brown fox"
similarity = cosine_similarity(sys.argv[1],sys.argv[2])
print(similarity)

