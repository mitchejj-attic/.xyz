workers Integer(ENV['PUMA_WORKERS'] || 4)          ## heroku run cat /proc/cpuinfo
threads Integer(ENV['MIN_THREADS']  || 1), Integer(ENV['MAX_THREADS'] || 16)

preload_app!

rackup      DefaultRackup
port        ENV['PORT']     || 3000

####
#   https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server
#   Heroku Rec
####
#workers Integer(ENV['WEB_CONCURRENCY'] || 2)
#threads_count = Integer(ENV['MAX_THREADS'] || 5)
#threads threads_count, threads_count
#
#preload_app!
#
#rackup      DefaultRackup
#port        ENV['PORT']     || 3000
#environment ENV['RACK_ENV'] || 'development'
