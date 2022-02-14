Rails.application.routes.draw do
  get 'static/index'
  namespace :v1, defaults: { format: :json } do
    get 'messages', to: 'messages#index'
  end
end
