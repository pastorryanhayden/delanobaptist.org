#!/bin/bash

path="/Users/ryanhayden/github/cranesvillebiblechurch.com/";
git_path="git@github.com:pastorryanhayden/cranesvillebiblechurch.com.git";
need_build=false;
#!/usr/bin/env bash

echo "Navigate to web root: $path";

cd $path;

echo "Update repo ...";
git pull $git_path;

echo "Test"

echo "Test Abouts from Airtable API"
if  $(node ./_buildscripts/test_abouts.js) ; 
then
    echo 'Abouts changed';
    echo 'Build Abouts ...'
    node ./_buildscripts/build_abouts.js
    need_build=true;
else
    echo 'Abouts not changed skip build'    
fi

echo "Test Blog from Airtable API"
if  $(node ./_buildscripts/test_blog.js) ; 
then
    echo 'Blog changed';
    echo 'Build Blog ...'
    node ./_buildscripts/build_blog.js
    need_build=true;
else
    echo 'Blog not changed skip build'    
fi

echo "Test Events from Airtable API"
if  $(node ./_buildscripts/test_events.js) ; 
then
    echo 'Events changed';
    echo 'Build Events ...'
    node ./_buildscripts/build_events.js
    need_build=true;
else
    echo 'Events not changed skip build'    
fi

echo "Test Ministries from Airtable API"
if  $(node ./_buildscripts/test_ministries.js) ; 
then
    echo 'Ministries changed';
    echo 'Build Ministries ...'
    node ./_buildscripts/build_ministries.js
    need_build=true;
else
    echo 'Ministries not changed skip build'    
fi

echo "Test homeMinistries from Airtable API"
if  $(node ./_buildscripts/test_homeministries.js) ; 
then
    echo 'homeMinistries changed';
    echo 'Build homeMinistries ...'
    node ./_buildscripts/build_homeministries.js
    need_build=true;
else
    echo 'homeMinistries not changed skip build'    
fi

echo "Test Photos from Airtable API"
if  $(node ./_buildscripts/test_photos.js) ; 
then
    echo 'Photos changed';
    echo 'Build Photos ...'
    node ./_buildscripts/build_photos.js
    need_build=true;
else
    echo 'Photos not changed skip build'    
fi

echo "Test Sermons from Airtable API"
if  $(node ./_buildscripts/test_sermons.js) ; 
then
    echo 'Sermons changed';
    echo 'Build Sermons ...'
    node ./_buildscripts/build_sermons.js
    need_build=true;
else
    echo 'Sermons not changed skip build'    
fi

echo "Test Series from Airtable API"
if  $(node ./_buildscripts/test_series.js) ; 
then
    echo 'Series changed';
    echo 'Build Series ...'
    node ./_buildscripts/build_series.js
    need_build=true;
else
    echo 'Series not changed skip build'    
fi

echo "Test Home Series from Airtable API"
if  $(node ./_buildscripts/test_homeseries.js) ; 
then
    echo 'Home Series changed';
    echo 'Build Home Series ...'
    node ./_buildscripts/build_homeseries.js
    need_build=true;
else
    echo 'Home Series not changed skip build'    
fi

if $need_build;
then
# echo "Build Jekyll";
# jekyll build
## 
## --This is actually not nescessary because glynn run's jekyll build--
echo "Compile SASS";
node-sass _css/app.scss _site/assets/css/app.css;


echo "Run Glynn";
glynn;
else 
echo "Everything up to date. Skip building";
fi
echo -e '\n Complete all scripts';