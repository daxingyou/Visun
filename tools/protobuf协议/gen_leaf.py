#!/usr/bin/python
# -*- coding: UTF-8 -*- 

import io
import os
import json
from xml.dom import minidom
import shutil
import codecs
import urllib
#import urllib2
import sys
import time


def excuteCmd(cmdStr):
	os.system(cmdStr)

def gen_proto(Proto, channel="game"): 
	print("=====Begin:" + Proto + " " + channel)
	print("gen json")
	if not os.path.exists("tmps"):
		os.makedirs("tmps")
	excuteCmd("pbjs -t json in/" + Proto + ".proto" + " -o tmps/" + Proto + ".json")
	print("gen " + Proto + ".js")
	excuteCmd("pbjs -t static-module -w commonjs -o ../../assets/common/script/proto/" + Proto + ".js in/" + Proto + ".proto" + " " + "--no-comments")
	#print("gen "+Proto+".d.ts")
	#excuteCmd("pbts -o ../../declares/" + Proto + ".d.ts ../../assets/common/script/proto/" + Proto + ".js")
	time.sleep(0.5)
	print("fix "+Proto+".js")
	excuteCmd("node fix.js " + Proto)
	print("gen rpc " + Proto)
	excuteCmd("node gen_leaf.js " + Proto + " " + channel)
	print("=====Finish: " + Proto + "\n")

protoName = sys.argv[1]
if(len(sys.argv)>=3):
	channel = sys.argv[2]
	gen_proto(protoName, channel)
else:
	gen_proto(protoName)

wai = input("press any key to exit !!!")
