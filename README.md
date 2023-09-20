# Uber Hackathon

This README provides step-by-step instructions to set up the website, install the necessary dependencies using a bash script, and run a Python script using a separate bash script.

## Prerequisites

Ensure that the following are installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Python 3.8](https://www.python.org/downloads/release/python-380/)
- [pip for Python 3.8](https://pip.pypa.io/en/stable/installation/)

## Website Project Setup

1. Clone the entire project repository.

```bash
git clone https://github.com/rayannm/UberHackathon
cd UberHackathon
```

2. Run the following command to install the required packages for the website and run it using the bash script:

```bash
chmod +x run_website.sh
./run_website.sh
```

The `run_website.sh` script contains the following:

```bash
#!/bin/bash

cd uberhackathon
npm install
npm run dev
```

## Running peakTimeAnalysis.py

1. Navigate to the directory containing `peakTimeAnalysis.py`.
   
2. Run the following command to install the Python dependencies and execute `peakTimeAnalysis.py` using a bash script:

```bash
chmod +x peakTimeAnalysis.sh
./peakTimeAnalysis.sh
```

The `peakTimeAnalysis.sh` script contains the following:

```bash
#!/bin/bash

# Install Python dependencies from requirements.txt
pip3.8 install -r requirements.txt

# Run coords.peakTimeAnalysis
python3.8 peakTimeAnalysis.py
```

## Running analysis.py

1. Navigate to the directory containing `analysis.py`.
   
2. Run the following command to install the Python dependencies and execute `analysis.py` using a bash script:

```bash
chmod +x analysis.sh
./analysis.sh
```

The `analysis.sh` script contains the following:

```bash
#!/bin/bash

# Install Python dependencies from requirements.txt
pip3.8 install -r requirements.txt

# Run analysis.py
python3.8 analysis.py
```

Ensure that you have appropriate permissions to execute the bash scripts (`run_website.sh`, `peakTimeAnalysis.sh`, `analysis.sh`). If needed, you can modify the permissions using the `chmod` command.
