#!/bin/bash

cd ~/code/master-theme
gem install jekyll
gem install glynn
npm install -g bower
npm install -g node-sass
npm install
npm install bower
bower install
chmod a+x _build.sh
chmod a+x _test.sh
rm -rf .git
