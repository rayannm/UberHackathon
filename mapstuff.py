import requests
import numpy as np
from datetime import datetime

from OSMPythonTools.api import Api
api = Api()
way = api.query('way/5887599')

way.tag('building')
# 'castle'
way.tag('architect')
# 'Johann Lucas von Hildebrandt'
way.tag('website')
# 'http://www.belvedere.at'