#!/bin/bash
# Serve the al-folio site locally.
# Uses the Homebrew Ruby (where the gems are installed) and points clang at the
# SDK's libc++ headers so any native gem rebuilds succeed on this machine.
set -e
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/bin:/usr/bin:$PATH"
SDK="$(xcrun --show-sdk-path)"
export CXXFLAGS="-isystem $SDK/usr/include/c++/v1"
export CPPFLAGS="-isystem $SDK/usr/include/c++/v1"
cd "$(dirname "$0")"
exec bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload "$@"
