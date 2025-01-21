---
sidebar_position: 1
---

# Começando no Search Engine

**Search Engine** é um mecanismo simples e eficiente que constrói um índice reverso para busca por palavras-chave e classifica os resultados usando o algoritmo **PageRank**.

## ⚙️ Instalação

Crie um ambiente virtual usando `venv`, pois o projeto ainda está em fase de testes alfa e em suas implementações iniciais.
```bash
python3 -m venv .env
source .env/bin/activate
pip install search-engine-cpp
```

## 🚀 Uso da Biblioteca no Python
```python
from search_engine.crawler import Crawler

crawler = Crawler("https://en.wikipedia.org", "/wiki/", "Cat", test_mode=True)
graph = crawler.run(limit=10)
my_dict = graph.compute_page_rank()
top = sorted(my_dict.items(), key=lambda item: item[1], reverse=True)[:3]

print(top)
```