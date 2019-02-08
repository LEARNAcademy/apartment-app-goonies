Rails.application.routes.draw do
  resources :apartments
  resources :apartments, constraints: ->(request){ !request.format.html? }
  devise_for :users

  get '/users/*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get '/guest/*path', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
end
