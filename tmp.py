from pathlib import Path 
lines=Path('src/data/hotspots.ts').read_text().splitlines() 
start=110 
for i in range(start,start+20): 
    print(f'{i+1}: {lines[i]}') 
