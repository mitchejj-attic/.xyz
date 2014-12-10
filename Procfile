#web: bundle exec passenger start -p $PORT --max-pool-size 3  --min-instances 3
#web: bundle exec unicorn -p $PORT -c ./config/unicorn.rb
#web: bundle exec puma -p $PORT -t 5:16
web: bundle exec puma -C config/puma.rb
#web: bundle exec puma -t ${PUMA_MIN_THREADS:-8}:${PUMA_MAX_THREADS:-12} -w ${PUMA_WORKERS:-2} -p $PORT
#web: bundle exec puma -t 5:16 -p $PORT
