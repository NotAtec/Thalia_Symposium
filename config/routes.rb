Rails.application.routes.draw do
  resources :lectures, only: [:index, :show], param: :slug
  devise_for :users
  resources :sponsors, only: [:index], param: :slug
  resources :speakers, only: [:index], param: :slug
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#home"
end
