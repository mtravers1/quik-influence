#!/bin/bash
source /home/ubuntu/.bashrc

#give permission for everything in the quikinfluence-api directory
sudo chmod -R 777 /home/ubuntu/quikinfluence-api

#navigate into our working directory where we have all our github files
cd /home/ubuntu/quikinfluence-api

#Stopping existing node servers
echo "Stopping any existing pm2 processes"
pm2 stop all
pm2 delete all
# pm2 start npm --name "quikinfluence-api" -- start
pm2 start npm -- start
# pm2 start process.env.RUN --name quikinfluence-api