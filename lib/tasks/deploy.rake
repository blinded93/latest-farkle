task :deploy do
  exec 'git push && git push heroku master'
end