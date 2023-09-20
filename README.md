# Uber Hackathon


# Website setup

This README provides step-by-step instructions to set up the website, install the necessary dependencies using a bash script, and run a Python script using a separate bash script.

## Prerequisites

Ensure that the following are installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/)
- [pip](https://pip.pypa.io/)

## React Project Setup

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

# Run npm install for the React project
npm install
```

## Running Coords.py

1. Navigate to the directory containing `coords.py`.

2. Create a Python virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate
```

3. Run the following command to install the Python dependencies and execute `coords.py` using a bash script:

```bash
chmod +x run_coords.sh
./run_coords.sh
```

The `run_coords.sh` script contains the following:

```bash
#!/bin/bash

# Install Python dependencies from requirements.txt
pip install -r requirements.txt

# Run coords.py
python coords.py
```

Ensure that you have appropriate permissions to execute the bash scripts (`install.sh` and `run_coords.sh`). If needed, you can modify the permissions using the `chmod` command.
