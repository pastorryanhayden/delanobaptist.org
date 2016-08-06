#!/bin/bash

path="/home/sitesforchurch/github/master-theme/";
git_path="https://github.com/SitesForChurch/master-theme.git";
need_build=false;

echo "Navigate to web root: $path";

cd $path;
echo "Update Data";
node _airtable.js;

echo "Compiling SASS, building jekyll, running browser-sync";
jekyll build -w & 
node-sass _css/app.scss _site/assets/css/app.css & 
browser-sync start --server '_site' --files '_site';


