#!/bin/bash

set -e

projects:(
    "application"
)

root_directory=$PWD

for project in "${projects[@]}"; do
    echo "Building $project..."
    cd $root_directory/$project
    npm install --ignore-scripts
    npm run build:release
    cd $root_directory
done
