cd
cd Desktop           reminder of commands to open
### ./RunCameras.sh

#!/bin/bash
# script to run cameras right after eachother

echo "Hello World"


### face validation here:
#cd 
#cd faceValidation
value='no'
echo "$value"
COUNTER=0
add=1
echo here
sleep 2s
until [ $COUNTER = 10 ] || [ "$value" = "yes" ] ; do
	#take pictures, send, pause, sync, get new value

	# RPi center shot
	cd 
	cd Desktop
	python camera.py

	# Flir sensor
	cd 
	cd Documents/LeptonModule-master/software/raspberrypi_video/
	sudo ./raspberrypi_video

	# right_left camera shots
	cd 
	cd Desktop
	python R_L_snapshot.py


	# send to server here:
	cd ..
	# rclone copy FlirSnapshots smirror:pictures 	# all images to gdrive
	rclone copy FlirSnapshots Transfer:ecen404        # to server

	sleep 1s #time for james to upload txt file
	echo sync #bug check

	# import new text file value
	cd 
	cd Desktop
	export GOOGLE_APPLICATION_CREDENTIALS="/home/pi/Documents/Smart Mirror-c0ccfb5f49ad.json"
	python downloadpy3again.py


	#read value
	#cd 
	#cd faceValidation
	value=`cat facevalidation.txt`
	echo "$value"
	echo COUNTER $COUNTER
	COUNTER=$(($COUNTER+$add))
sleep 2s
done
