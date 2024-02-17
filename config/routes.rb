Rails.application.routes.draw do
  devise_for :users
  resources :lectures
  resources :sponsors
  resources :speakers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "speakers#index"
end
