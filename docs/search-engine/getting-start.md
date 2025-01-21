---
sidebar_position: 1
---

# Getting Start

**Search Engine** is a simple, efficient engine that builds a reverse index for keyword searching and ranks results using the **PageRank** algorithm.

## ⚙️ Installation

Please create a virtual environment using `venv`, as the project is still in alpha testing and in its initial implementations.
```bash
python3 -m venv .env
source .env/bin/activate
pip install search-engine-cpp
```

## 🚀 Usage
```python
from search_engine.crawler import Crawler

crawler = Crawler("https://en.wikipedia.org", "/wiki/", "Cat", test_mode=True)
graph = crawler.run(limit=10)
my_dict = graph.compute_page_rank()
top = sorted(my_dict.items(), key=lambda item: item[1], reverse=True)[:3]

print(top)
```