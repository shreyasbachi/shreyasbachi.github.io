#!/bin/bash
# Script to run Jekyll with the correct Ruby from conda environment

CONDA_ENV_PATH="/opt/homebrew/Caskroom/miniconda/base/envs/personal_website"
export PATH="$CONDA_ENV_PATH/bin:$PATH"
export GEM_HOME="$CONDA_ENV_PATH/share/rubygems"
export GEM_PATH="$CONDA_ENV_PATH/share/rubygems:$CONDA_ENV_PATH/lib/ruby/gems/3.2.0"

cd "$(dirname "$0")"
exec $CONDA_ENV_PATH/bin/ruby -I $GEM_HOME/gems/jekyll-4.4.1/lib $GEM_HOME/gems/jekyll-4.4.1/exe/jekyll serve --livereload
