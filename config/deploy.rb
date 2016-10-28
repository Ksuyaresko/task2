require 'mina/git'

set :domain, 'delta.branderstudio.com'
set :user, ''
set :deploy_to, ''
set :repository, ''
set :branch, 'master'

set :shared_paths, ['node_modules', './app.json']

task :environment do
end

task :setup => :environment do
  queue! %[mkdir -p "#{deploy_to}/#{shared_path}/node_modules"]
  queue! %[touch "#{deploy_to}/#{shared_path}/app.json"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/#{shared_path}/node_modules"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/#{shared_path}/app.json"]
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  to :before_hook do
  end
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
    queue! %[npm install]
    queue! %[./node_modules/.bin/gulp]

    to :launch do
      queue! %[pwd]
      queue! %[npm run compile]
      queue! %[pm2 restart ./app.json]
    end
  end
end