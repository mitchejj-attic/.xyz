task default: "assets:precompile"

namespace :assets do
  task :precompile do
#    sh "middleman build"
    sh "bundle exec middleman build --verbose"
  end
end
namespace :deploy do |task|
   sh "surge -p build -d nullog.net"
end
